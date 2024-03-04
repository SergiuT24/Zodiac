// ZODIAC SIGN SCROLL TO CONTENT
const signDateLinks = document.querySelectorAll('.mutable-dates__menu .mutabled-dates__link')
const hrefDateLinks = Array.from(signDateLinks);
hrefDateLinks.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const yOffset = -200;
		const href = this.getAttribute('href');
		const scrollElement = document.querySelector(href);
		const y = scrollElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: 'smooth' });
	});
});
// SHOW SCROLL BUTTON
let lastScrollTop = 0;
const scrollButton = document.querySelector('.scroll-top');
window.addEventListener('scroll', function () {
	const scrollTop = window.scrollY;
	if (scrollTop > lastScrollTop) {
		scrollButton.style.display = 'none';
	} else {
		scrollButton.style.display = 'flex';
	}
	lastScrollTop = scrollTop;
});
// GO UP WITH SCROLL BUTTON
scrollButton.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});