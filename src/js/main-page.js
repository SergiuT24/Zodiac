import dayjs from 'dayjs';

fetch('https://aws-horoscope-base.s3.eu-central-1.amazonaws.com/horoscopeinfo.json')
	.then(response => response.json()) // Parse response as JSON
	.then(jsonData => {
		// Use the JSON data
		console.log('JSON Data:', jsonData);
	})
	.catch(error => {
		console.error('Error fetching JSON:', error);
	});

// const formattedDate = dayjs().format('YYYY-MM-DD');
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const romanianDate = new Date().toLocaleDateString('ro-RO', options);

// const zodiacSigns = [
// 	"Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
// 	"Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pește"
// ];


// zodiacSigns.forEach(signName => {
// 	const signElement = document.getElementById(`${signName}`);
// 	const myPopup = new Popup({
// 		id: "my-popup",
// 		title: `
// 			<div class="pupup-imb-box">
// 			<img class="pupup-img-sign" src="/img/zodiac-main-signs/${signName}.png" alt="${signName}">
// 			</div>
// 			`,
// 		content: `
// 			<div class="popup-body_sign">Zodia: ${signName}</div>
// 			<div class="popup-body_day">Horoscopul: ${romanianDate}</div>
// 			<div class="popup-body_text">${horoscopeData[formattedDate][signName]}<br><br><a class="popup-body_link" href="/signs-html/${signName}.html">Află mai multe despre ${signName}</a></div>
// 			`,
// 	});
// 	signElement.addEventListener('click', () => {
// 		myPopup.show();
// 	});
// });

// // //========================================================================================================================================================
// // POPUPSECTION

// // // JSON QOUTES
// // // import horoscopePrediction from '../js/horoscope-prediction.json' assert { type: 'json' };
// // import dayQuotes from '../js/day-quotes.json' assert { type: 'json' };
// // // QOUTE SECTION
// // const quote = document.getElementById('block-quote');
// // quote.innerHTML = `Citatul zilei: ${dayQuotes[formattedDate]["quote"]}`;
// // const author = document.getElementById('block-author');
// // author.innerHTML = `${dayQuotes[formattedDate]["author"]}`;