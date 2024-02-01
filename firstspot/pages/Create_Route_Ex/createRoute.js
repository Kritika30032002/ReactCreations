const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df06079815msh4215d90aa2d29aap1214f2jsn2c88284cca9b',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_class=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2022-03-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));