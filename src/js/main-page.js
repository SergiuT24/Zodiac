const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const romanianDate = new Date().toLocaleDateString('ro-RO', options);

const zodiacSigns = [
	"berbec", "taur", "gemeni", "rac", "leu", "fecioara",
	"balanta", "scorpion", "sagetator", "capricorn", "varsator", "pesti"
];

fetch(`https://aws-horoscope-base.s3.eu-central-1.amazonaws.com/${formattedDate}.json`)
	.then(response => response.json())
	.then(jsonData => {
		zodiacSigns.forEach(signName => {
			const signElement = document.getElementById(`${signName}`);
			const myPopup = new Popup({
				id: "my-popup",
				title: `
						<div class="pupup-imb-box">
						<img class="pupup-img-sign" src="/img/zodiac-main-signs/${signName}.png" alt="${signName}">
						</div>
						`,
				content: `
						<div class="popup-body_sign">Zodia: ${signName}</div>
						<div class="popup-body_day">Horoscopul: ${romanianDate}</div>
						<div class="popup-body_text">${jsonData[formattedDate][signName]['horoscope']}<br><br><a class="popup-body_link" href="/zodii/${signName}.html">Află mai multe despre ${signName.charAt(0).toUpperCase() + signName.slice(1)}</a></div>
						`,
			});
			signElement.addEventListener('click', () => {
				myPopup.show();
			});
		});

		document.getElementById('block-quote').innerHTML = `Citatul zilei: ${jsonData[formattedDate]['quote']['text']}`;

		document.getElementById('block-author').innerHTML = `${jsonData[formattedDate]['quote']['author']}`;
	})
	.catch(error => {
		console.error('Error fetching JSON:', error);
	});

