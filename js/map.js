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

var marker = L.marker([32.21830180216841, 76.3205383346266]).addTo(map)
		.bindPopup('<b>Dharamshala, India</b>');

var marker = L.marker([24.846783220213855, 79.92126619692121]).addTo(map)
		.bindPopup('<b>Khajarho, India</b>');
		
var marker = L.marker([25.362892559692956, 78.63064312025891]).addTo(map)
		.bindPopup('<b>Orcha, India</b>');

var marker = L.marker([15.334265692657059, 76.46127470601388]).addTo(map)
		.bindPopup('<b>Hampi, India</b>');

var marker = L.marker([14.545139274673275, 74.32353945415527]).addTo(map)
		.bindPopup('<b>Gokarna, India</b>');
		
var marker = L.marker([15.40966957544473, 73.98447399760195]).addTo(map)
		.bindPopup('<b>Goa, India</b>');

var marker = L.marker([26.27888519518432, 73.02297614251647]).addTo(map)
		.bindPopup('<b>Jodhpur, Vietnam</b>');

var marker = L.marker([26.88360350934963, 75.783635272374]).addTo(map)
		.bindPopup('<b>Jaipur, Vietnam</b>');
		
var marker = L.marker([26.915494690141028, 70.9081163161262]).addTo(map)
		.bindPopup('<b>Jaiselmer, India</b>');

var marker = L.marker([27.2035628438866, 77.99853847412852]).addTo(map)
		.bindPopup('<b>Agra, India</b>');

var marker = L.marker([35.690134084342475, 139.76431893578757]).addTo(map)
		.bindPopup('<b>Tokyo, Japan</b>');
		
var marker = L.marker([35.2530315575035, 139.03455324030182]).addTo(map)
		.bindPopup('<b>Hakone, Japan</b>');