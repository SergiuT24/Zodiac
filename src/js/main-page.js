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
			const link = document.getElementById(signName);
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const popup = document.getElementById('popup');
				const popupImage = document.getElementById('popupImage');
				const popupTitle = document.getElementById('popupTitle');
				const popupTime = document.getElementById('popupTime');
				const popupHoroscope = document.getElementById('popupHoroscope');
				const popupLink = document.getElementById('popupLink');
				popupImage.innerHTML = `
				<img class="pupup-img-sign" src="/img/zodiac-main-signs/${signName}.png" alt="${signName}">
				`;
				popupTitle.innerHTML = `
				Zodia: ${signName}
				`;
				popupTime.innerHTML = `
				Horoscopul: ${romanianDate}
				`;
				popupHoroscope.innerHTML = `
				${jsonData[formattedDate][signName]['horoscope']}
				`;
				popupLink.innerHTML = `
				<a class="popup-body_link" href="/zodii/${signName}.html">Află mai multe despre ${signName.charAt(0).toUpperCase() + signName.slice(1)}</a>
				`;
				popup.style.display = 'block';
			});
		});

		document.getElementById('closePopup').addEventListener('click', function () {
			document.getElementById('popup').style.display = 'none';
		});

		document.getElementById('block-quote').innerHTML = `Citatul zilei: ${jsonData[formattedDate]['quote']['text']}`;

		document.getElementById('block-author').innerHTML = `${jsonData[formattedDate]['quote']['author']}`;
	})
	.catch(error => {
		console.error('Error fetching JSON:', error);
	});

