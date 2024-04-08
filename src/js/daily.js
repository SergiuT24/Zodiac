import dayjs from 'dayjs';

document.addEventListener('DOMContentLoaded', function () {
	const formattedDate = dayjs().format('YYYY-MM-DD');
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const romanianDate = new Date().toLocaleDateString('ro-RO', options);

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
						const nameElement = document.getElementById(`${matchesId}-name`);
						const iconIndex = jsonData[formattedDate][signName][matchesId];
						const photoName = zodiacSigns[iconIndex - 1];
						imgElement.src = `/icons/match/${iconIndex}.svg`;
						imgElement.alt = photoName;
						nameElement.innerHTML = photoName;
					});

					const containerIds = ["success", "happiness", "sex", "provision", "stress", "erudition"];

					containerIds.forEach(containerId => {
						const starContainer = document.getElementById(containerId);
						const stars = starContainer.querySelectorAll('.ri-star-fill');

						const numYellowStars = jsonData[formattedDate][signName][containerId];

						for (let i = 0; i < numYellowStars; i++) {
							stars[i].classList.add("yellow-for-stars");
						}
					});
				}
			});
		})
		.catch(error => {
			console.error('Error fetching JSON:', error);
		});
});