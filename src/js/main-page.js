import dayjs from 'dayjs';

const formattedDate = dayjs().format('YYYY-MM-DD');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const romanianDate = new Date().toLocaleDateString('ro-RO', options);

const zodiacSigns = [
	"Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioara",
	"Balanta", "Scorpion", "Sagetator", "Capricorn", "Varsator", "Pesti"
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
						<div class="popup-body_text">${jsonData[formattedDate][signName.toLowerCase()]}<br><br><a class="popup-body_link" href="/zodii/${signName.toLowerCase()}.html">Află mai multe despre ${signName}</a></div>
						`,
			});
			signElement.addEventListener('click', () => {
				myPopup.show();
			});
		});
	})
	.catch(error => {
		console.error('Error fetching JSON:', error);
	});









// // //========================================================================================================================================================
// // POPUPSECTION

// // // JSON QOUTES
// // // import horoscopePrediction from '../js/horoscope-prediction.json' assert { type: 'json' };
// // import dayQuotes from '../js/day-quotes.json' assert { type: 'json' };
// // // QOUTE SECTION
// // const quote = document.getElementById('block-quote');
// // quote.innerHTML = `Citatul zilei: ${dayQuotes[formattedDate]["quote"]}`;
// // const author = document.getElementById('block-author');
// // author.innerHTML = `${dayQuotes[formattedDate]["author"]}`;