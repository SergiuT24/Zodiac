//========================================================================================================================================================
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
		<img class="pupup-img-sign" src="/public/img/${signName}.png" alt="${signName}">
		</div>
		<div class="popup-title-sign">${signName}</div>
		<div class="sign-zodiac__date">Mar 21 - Apr 20</div>
		`,
		content: `
		<div class="popup-body_sign">Zodia: ${signName}</div>
		<div class="popup-body_day">Horoscopul zilnic pentru ${romanianDate}:</div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta distinctio enim fugit,
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta distinctio enim fugit,
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta distinctio enim fugit, 
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta distinctio enim fugit, 
		`,
	});
	signElement.addEventListener('click', () => {
		myPopup.show();
	});
});