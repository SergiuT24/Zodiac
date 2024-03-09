// JSON-HOROSCOPE-STARS 
import horoscopeStars from '../js/horoscope-stars.json' assert { type: 'json'};

// NPM PACKAGE FOR DATE
import dayjs from 'dayjs';
const currentDate = dayjs().format('YYYY-MM-DD');

// MONTH AND DAY for image
const currentMonth = dayjs(currentDate).month() + 1;
const currentDay = dayjs(currentDate).date();

// CURRENT DATE
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const romanianDate = new Date().toLocaleDateString('ro-RO', options);
//========================================================================================================================================================
// GET RANDOM PHOTO FOR TODAY MATCHES AND NAME

function getCurrentPageId() {
	const currentPageUrl = window.location.href;
	const pageId = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
	return pageId;
}

// Get the current page ID
const currentPageId = getCurrentPageId();

// Get current page ID to load the corresponding data
const currentPageData = horoscopeStars[currentPageId];

const signs = [
	"Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
	"Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pește"
];

// RANDOM TODAY'S MATCHES
const matchesIds = ["love", "career", "friend"];
matchesIds.forEach(matchesId => {
	const imgElement = document.getElementById(matchesId);
	const iconIndex = currentPageData[currentDate][matchesId];
	imgElement.src = `/icons/match/${iconIndex}.svg`;
	imgElement.alt = signs[iconIndex - 1];
});

// NAME FOR PHOTO
const matchesNameIds = ["love-name", "career-name", "friend-name"];

matchesNameIds.forEach(matchesNameId => {
	const [prefix, suffix] = matchesNameId.split('-');
	const nameElement = document.getElementById(matchesNameId);
	const imgIndex = currentPageData[currentDate][prefix];
	nameElement.innerHTML = `${signs[imgIndex - 1]}`;
});
//========================================================================================================================================================
// RANDOM RATING STARS OF MOOD
const containerIds = ["success", "happiness", "sex", "provision", "stress", "erudition"];

containerIds.forEach(containerId => {
	const starContainer = document.getElementById(containerId);
	const stars = starContainer.querySelectorAll('.ri-star-fill');

	const numYellowStars = currentPageData[currentDate][containerId];

	for (let i = 0; i < numYellowStars; i++) {
		stars[i].classList.add("yellow-for-stars");
	}
});