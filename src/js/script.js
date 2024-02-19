// SHOW MENU
const navBody = document.getElementById('menu'),
	navOpen = document.getElementById('menu-open'),
	navClose = document.getElementById('menu-close');
// OPEN MENU
navOpen.addEventListener('click', () => {
	navBody.classList.add('menu__show')
});
// CLOSE MENU
navClose.addEventListener('click', () => {
	navBody.classList.remove('menu__show')
});
//========================================================================================================================================================
// JSON-HOROSCOPE to use "horoscopePrediction[key][key]"
import horoscopePrediction from '../js/horoscope-prediction.json' assert { type: 'json' };
// NPM PACKAGE FOR DATE
import dayjs from 'dayjs';
const formattedDate = dayjs().format('YYYY-MM-DD');
// CURRENT DATE
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const romanianDate = new Date().toLocaleDateString('ro-RO', options);
//========================================================================================================================================================
// POPUPSECTION
const zodiacSigns = [
	"Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
	"Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pește"
];
zodiacSigns.forEach(signName => {
	const signElement = document.getElementById(`${signName}`);
	const myPopup = new Popup({
		id: "my-popup",
		title: `
		<div class="pupup-imb-box">
		<img class="pupup-img-sign" src="/img/${signName}.png" alt="${signName}">
		</div>
		`,
		content: `
		<div class="popup-body_sign">Zodia: ${signName}</div>
		<div class="popup-body_day">Horoscopul: ${romanianDate}</div>
		<div class="popup-body_text">${horoscopePrediction[formattedDate][signName]}</div>
		`,
	});
	signElement.addEventListener('click', () => {
		myPopup.show();
	});
});
// JSON QOUTES
// import horoscopePrediction from '../js/horoscope-prediction.json' assert { type: 'json' };
import dayQuotes from '../js/day-quotes.json' assert { type: 'json' };
// QOUTE SECTION
const quote = document.getElementById('block-quote');
quote.innerHTML = `Citatul zilei: ${dayQuotes[formattedDate]["quote"]}`;
const author = document.getElementById('block-author');
author.innerHTML = `${dayQuotes[formattedDate]["author"]}`;
