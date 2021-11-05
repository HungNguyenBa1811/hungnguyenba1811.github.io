let userApi = 'https://covid-19-data.p.rapidapi.com/country/code?code=it'
fetch(userApi, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "ea05861deemshd05fd813b22a171p1e673cjsn04db873bf3a4"
	} 
})
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        
        let html = posts.map(function(item) {
            return `<li>
				<h2>${item.country}</h2>
				<h2>${item.code}</h2>
                <h2>${item.confirmed}</h2>
				<h2>${item.recovered}</h2>
				<h2>${item.critical}</h2>
				<p>${item.deaths}</p>
				<h2>${item.latitude}</h2>
				<h2>${item.longitude}</h2>
				<h2>${item.lastChange}</h2>
				<h2>${item.lastUpdate}</h2>
            </li>`
        });
        
        document.querySelector('.call').innerHTML = html;

    })