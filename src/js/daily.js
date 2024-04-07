import dayjs from 'dayjs';

const formattedDate = dayjs().format('YYYY-MM-DD');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const romanianDate = new Date().toLocaleDateString('ro-RO', options);

function getCurrentPageId() {
	const currentPageUrl = window.location.href;
	const pageId = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
	return pageId;
}

const currentPageId = getCurrentPageId().slice(0, -5);

const signDate = document.getElementById('current-date');
signDate.innerHTML = `Horoscopul zilei de ${romanianDate} pentru ${currentPageId}:`;

const zodiacSigns = [
	"Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
	"Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pește"
];

fetch(`https://aws-horoscope-base.s3.eu-central-1.amazonaws.com/${formattedDate}.json`)
	.then(response => response.json())
	.then(jsonData => {
		zodiacSigns.forEach(signName => {
			const signElement = document.getElementById(`${signName}`);
			signElement.innerHTML = `${jsonData[formattedDate][signName]}`
		});
	})
	.catch(error => {
		console.error('Error fetching JSON:', error);
	});
//========================================================================================================================================================

// // RANDOM TODAY'S MATCHES
// const matchesIds = ["love", "career", "friend"];
// matchesIds.forEach(matchesId => {
// 	const imgElement = document.getElementById(matchesId);
// 	const iconIndex = currentPageData[currentDate][matchesId];
// 	imgElement.src = `/icons/match/${iconIndex}.svg`;
// 	imgElement.alt = signs[iconIndex - 1];
// });

// // NAME FOR PHOTO
// const matchesNameIds = ["love-name", "career-name", "friend-name"];

// matchesNameIds.forEach(matchesNameId => {
// 	const [prefix, suffix] = matchesNameId.split('-');
// 	const nameElement = document.getElementById(matchesNameId);
// 	const imgIndex = currentPageData[currentDate][prefix];
// 	nameElement.innerHTML = `${signs[imgIndex - 1]}`;
// });
// //========================================================================================================================================================
// // RANDOM RATING STARS OF MOOD
// const containerIds = ["success", "happiness", "sex", "provision", "stress", "erudition"];

// containerIds.forEach(containerId => {
// 	const starContainer = document.getElementById(containerId);
// 	const stars = starContainer.querySelectorAll('.ri-star-fill');

// 	const numYellowStars = currentPageData[currentDate][containerId];

// 	for (let i = 0; i < numYellowStars; i++) {
// 		stars[i].classList.add("yellow-for-stars");
// 	}
// });