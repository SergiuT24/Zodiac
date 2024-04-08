import dayjs from 'dayjs';

document.addEventListener('DOMContentLoaded', function () {
	const formattedDate = dayjs().format('YYYY-MM-DD');
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const romanianDate = new Date().toLocaleDateString('ro-RO', options);

	// function getCurrentPageId() {
	// 	const currentPageUrl = window.location.href;
	// 	const pageId = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);
	// 	return pageId;
	// }

	// const currentPageId = getCurrentPageId().slice(0, -5);

	const zodiacSigns = [
		"berbec", "taur", "gemeni", "rac", "leu", "fecioara",
		"balanta", "scorpion", "sagetator", "capricorn", "varsator", "pesti"
	];

	const signDate = document.getElementById('current-date');

	fetch(`https://aws-horoscope-base.s3.eu-central-1.amazonaws.com/${formattedDate}.json`)
		.then(response => response.json())
		.then(jsonData => {
			zodiacSigns.forEach(signName => {
				const signElement = document.getElementById(`${signName}`);
				if (signElement) {
					signElement.innerHTML = `${jsonData[formattedDate][signName]['horoscope']}`;
					signDate.innerHTML = `Horoscopul zilei de ${romanianDate} pentru ${signName}:`;

					const matchesIds = ["love", "career", "friend"];

					matchesIds.forEach(matchesId => {
						const imgElement = document.getElementById(matchesId);
						const iconIndex = jsonData[formattedDate][signName][matchesId];
						imgElement.src = `/icons/match/${iconIndex}.svg`;
						imgElement.alt = zodiacSigns[iconIndex - 1];
					});
				}
			});
		})
		.catch(error => {
			console.error('Error fetching JSON:', error);
		});
});


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