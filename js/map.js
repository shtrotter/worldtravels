var map = L.map('map').setView([39.74257870459885, -104.9340878016765], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([39.74257870459885, -104.9340878016765]).addTo(map)
		.bindPopup('<b>Denver, CO</b> <br> Basecamp')
		.openPopup();
		
var marker = L.marker([48.87169887112109, 2.3456590673877202]).addTo(map)
		.bindPopup('<b>Paris, FR</b> <br> June Trip with Mom, Cassie, and Sam')

var marker = L.marker([35.32234477374835, 24.544360080351105]).addTo(map)
		.bindPopup('<b>Paris, FR</b> <br> June Trip with Mom, Cassie, and Sam')
		
var marker = L.marker([21.031545954291136, 105.84583832159872]).addTo(map)
		.bindPopup('<b>Vietnam, 1st AirBnB</b> <br> First Place We Stayed')