// SHOW MENU
const navBody = document.getElementById('menu'),
	navOpen = document.getElementById('menu-open'),
	navClose = document.getElementById('menu-close');
// OPEN MENU
navOpen.addEventListener('click', () => {
	navBody.classList.add('menu__show');
});
// CLOSE MENU
navClose.addEventListener('click', () => {
	navBody.classList.remove('menu__show');
});
//========================================================================================================================================================
// SHOW SUBMENU-ZODIAC
const zodiacShowLink = document.getElementById('zodiac-subnav');
const zodiacHiddenBlock = document.getElementById('hidden-subnav');
function showZodiacHiddenBlock() {
	zodiacHiddenBlock.classList.add('show');
}
function hideZodiacHiddenBlock() {
	zodiacHiddenBlock.classList.remove('show');
}
// FOR PC
if (window.innerWidth > 767.98) {
	zodiacShowLink.addEventListener('mouseenter', showZodiacHiddenBlock);
	zodiacShowLink.addEventListener('mouseleave', () => {
		setTimeout(() => {
			if (!zodiacHiddenBlock.matches(':hover')) {
				hideZodiacHiddenBlock();
			}
		}, 300);
	});
	zodiacHiddenBlock.addEventListener('mouseleave', hideZodiacHiddenBlock);
}
// FOR MOBILE
window.addEventListener('load', function () {
	const mobileSubNav = document.getElementById('mobile-subnav');
	let mobileSubMenu = null;
	zodiacShowLink.addEventListener('click', function (e) {
		if (window.innerWidth <= 767.98) {
			if (!mobileSubMenu) {
				e.preventDefault();
				mobileSubMenu = document.createElement('ul');
				mobileSubMenu.classList.add('menu__list');
				mobileSubMenu.innerHTML = `
							<div class="menu__item for-remove">
								<div class="menu__subnav-signs">
									<div class="menu__subnav-signs-column">
										<a class="menu__subnav-signs-link" href="/signs-html/Berbec.html">Berbec</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Taur.html">Taur</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Gemeni.html">Gemeni</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Rac.html">Rac</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Leu.html">Leu</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Fecioară.html">Fecioară</a>
									</div>
									<div class="menu__subnav-signs-column">
										<a class="menu__subnav-signs-link" href="/signs-html/Balanță.html">Balanță</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Scorpion.html">Scorpion</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Săgetător.html">Săgetător</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Capricorn.html">Capricorn</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Vărsător.html">Vărsător</a>
										<a class="menu__subnav-signs-link" href="/signs-html/Pește.html">Pește</a>
									</div>
								</div>
							</div>
				`
				mobileSubNav.insertAdjacentElement('afterend', mobileSubMenu);
			} else {
				mobileSubMenu.remove();
				mobileSubMenu = null;
			}
		}
	});
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
// SELECT SIGN TAIRS
// document.getElementById("select-sign").addEventListener("change", function () {
// 	const selectedOption = this.value;
// 	createBlock(selectedOption);
// });

// function createBlock(option) {
// 	const someBlock = document.getElementById("some-block");
// 	someBlock.innerHTML = "";

// 	const block = document.createElement("div");
// 	block.textContent
// }