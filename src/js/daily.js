// NPM PACKAGE FOR DATE
import dayjs from 'dayjs';
const currentDate = dayjs().format('YYYY-MM-DD');

// CURRENT DATE
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const romanianDate = new Date().toLocaleDateString('ro-RO', options);

// RANDOM RATING STARS OF MOOD
const containerIds = ["succes", "happiness", "sex", "provision", "stres", "erudition"];

if (currentDate) {
	containerIds.forEach(containerId => {
		const starContainer = document.getElementById(containerId);
		const stars = starContainer.querySelectorAll('.ri-star-fill');

		const numYellowStars = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

		for (let i = 0; i < numYellowStars && i < stars.length; i++) {
			stars[i].classList.add("yellow-for-stars");
		}
	});
}