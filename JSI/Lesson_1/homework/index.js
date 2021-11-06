let userApi = 'https://covid-19-data.p.rapidapi.com/totals'
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
            return `<tr>
                <td class="text-center">${item.confirmed}</td>
				<td class="text-center">${item.recovered}</td>
				<td class="text-center">${item.critical}</td>
				<td class="text-center">${item.deaths}</td>
				<td>${item.lastChange}</td>
				<td>${item.lastUpdate}</td>
            </tr>`
        });
        
        document.querySelector('.call').innerHTML = html;

    })