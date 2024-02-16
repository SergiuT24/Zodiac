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

// import json-horoscope, to use "horoscopePrediction[key][key]"
import horoscopePrediction from '../js/horoscope-prediction.json' assert { type: 'json' };
// Date in format yyyy-mm-dd with dayjs npm
import dayjs from 'dayjs';
const formattedDate = dayjs().format('YYYY-MM-DD');
// Current date
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const romanianDate = new Date().toLocaleDateString('ro-RO', options);
//========================================================================================================================================================
// Popup section
// My popup function
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