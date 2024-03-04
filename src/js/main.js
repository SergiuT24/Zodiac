import '../scss/style.scss';
//========================================================================================================================================================
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