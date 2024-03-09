// JSON-HOROSCOPE-STARS 
import horoscopeStars from '../js/horoscope-stars.json' assert { type: 'json'};
// NPM PACKAGE FOR DATE
import dayjs from 'dayjs';
const currentDate = dayjs().format('YYYY-MM-DD');

// CURRENT DATE
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const romanianDate = new Date().toLocaleDateString('ro-RO', options);

// RANDOM TODAY'S MATCHES
const matchesIds = ["love", "career", "friend"];

matchesIds.forEach(matchesId => {
	const imgElement = document.getElementById(matchesId);
	const randomNumber = Math.floor(Math.random() * 12) + 1;
	imgElement.src = `/icons/match/${randomNumber}.svg`
});

// RANDOM RATING STARS OF MOOD
const containerIds = ["succes", "happiness", "sex", "provision", "stres", "erudition"];

containerIds.forEach(containerId => {
	const starContainer = document.getElementById(containerId);
	const stars = starContainer.querySelectorAll('.ri-star-fill');

	const numYellowStars = horoscopeStars[currentDate][containerId];

	for (let i = 0; i < numYellowStars; i++) {
		stars[i].classList.add("yellow-for-stars");
	}
});