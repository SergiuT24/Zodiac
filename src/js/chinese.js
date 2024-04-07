document.getElementById('submitYear').addEventListener('click', function () {
	const selectedYear = document.getElementById('year').value;
	function calculateZodiac(year) {
		switch (year % 12) {
			case 0:
				return '../../zodiac/chinez/maimuta.html';
				break;
			case 1:
				return '../../zodiac/chinez/cocos.html';
				break;
			case 2:
				return '../../zodiac/chinez/caine.html';
				break;
			case 3:
				return '../../zodiac/chinez/mistret.html';
				break;
			case 4:
				return '../../zodiac/chinez/sobolan.html';
				break;
			case 5:
				return '../../zodiac/chinez/bivol.html';
				break;
			case 6:
				return '../../zodiac/chinez/tigru.html';
				break;
			case 7:
				return '../../zodiac/chinez/iepure.html';
				break;
			case 8:
				return '../../zodiac/chinez/dragon.html';
				break;
			case 9:
				return '../../zodiac/chinez/sarpe.html';
				break;
			case 10:
				return '../../zodiac/chinez/cal.html';
				break;
			case 11:
				return '../../zodiac/chinez/capra.html';
				break;
		}
	}
	let result = calculateZodiac(selectedYear);
	window.location.href = result;
});
