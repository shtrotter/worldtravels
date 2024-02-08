var map = L.map('map').setView([1, 1], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([39.74257870459885, -104.9340878016765]).addTo(map)
		.bindPopup('<b>Denver, CO</b> <br> Basecamp')
		.openPopup();
		
var marker = L.marker([48.87169887112109, 2.3456590673877202]).addTo(map)
		.bindPopup('<b>Paris, Francew</b> <br> June Trip with Mom, Cassie, and Sam');

var marker = L.marker([43.29786538386166, 5.406695144698911]).addTo(map)
		.bindPopup('<b>Marseille, France</b> <br> June Trip with Mom, Cassie, and Sam');
		
var marker = L.marker([21.031545954291136, 105.84583832159872]).addTo(map)
		.bindPopup('<b>Hanoi, Vietnam</b> <br>1st AirBnB');

var marker = L.marker([20.8024189381045, 106.99553079762494]).addTo(map)
		.bindPopup('<b>Cat Ba, Vietnam</b>');

var marker = L.marker([22.362196216085742, 103.80972503855087]).addTo(map)
		.bindPopup('<b>Sa Pa, Vietnam</b>');
		
var marker = L.marker([28.64860307747513, 77.23193364636423]).addTo(map)
		.bindPopup('<b>Delhi, India</b>');