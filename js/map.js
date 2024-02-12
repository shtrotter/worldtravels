var map = L.map('map').setView([1, 1], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker_Denver = L.marker([39.74257870459885, -104.9340878016765]).addTo(map)
		.bindPopup('<b>Denver, CO</b> <br> Basecamp')
		.openPopup();
		
var marker_Paris = L.marker([48.87169887112109, 2.3456590673877202]).addTo(map)
		.bindPopup('<b>Paris, Francew</b> <br> June Trip with Mom, Cassie, and Sam');

var marker_Marseille = L.marker([43.29786538386166, 5.406695144698911]).addTo(map)
		.bindPopup('<b>Marseille, France</b> <br> June Trip with Mom, Cassie, and Sam');
		
var marker_Hanoi = L.marker([21.031545954291136, 105.84583832159872]).addTo(map)
		.bindPopup('<b>Hanoi, Vietnam</b> <br>1st AirBnB');

var marker_Cat_Ba = L.marker([20.8024189381045, 106.99553079762494]).addTo(map)
		.bindPopup('<b>Cat Ba, Vietnam</b>');

var marker_Sa_Pa = L.marker([22.362196216085742, 103.80972503855087]).addTo(map)
		.bindPopup('<b>Sa Pa, Vietnam</b>');
		
var marker_Delhi = L.marker([28.64860307747513, 77.23193364636423]).addTo(map)
		.bindPopup('<b>Delhi, India</b>');

var marker_Dharamshala = L.marker([32.21830180216841, 76.3205383346266]).addTo(map)
		.bindPopup('<b>Dharamshala, India</b>');

var marker_Khajarho = L.marker([24.846783220213855, 79.92126619692121]).addTo(map)
		.bindPopup('<b>Khajarho, India</b>');
		
var marker_Orcha = L.marker([25.362892559692956, 78.63064312025891]).addTo(map)
		.bindPopup('<b>Orcha, India</b>');

var marker_Hampi = L.marker([15.334265692657059, 76.46127470601388]).addTo(map)
		.bindPopup('<b>Hampi, India</b>');

var marker_Gokarna = L.marker([14.545139274673275, 74.32353945415527]).addTo(map)
		.bindPopup('<b>Gokarna, India</b>');
		
var marker_Goa = L.marker([15.40966957544473, 73.98447399760195]).addTo(map)
		.bindPopup('<b>Goa, India</b>');

var marker_Jodhpur = L.marker([26.27888519518432, 73.02297614251647]).addTo(map)
		.bindPopup('<b>Jodhpur, Vietnam</b>');

var marker_Jaipur = L.marker([26.88360350934963, 75.783635272374]).addTo(map)
		.bindPopup('<b>Jaipur, Vietnam</b>');
		
var marker_Jaiselmer = L.marker([26.915494690141028, 70.9081163161262]).addTo(map)
		.bindPopup('<b>Jaiselmer, India</b>');

var marker_Agra = L.marker([27.2035628438866, 77.99853847412852]).addTo(map)
		.bindPopup('<b>Agra, India</b>');

var marker_Tokyo = L.marker([35.690134084342475, 139.76431893578757]).addTo(map)
		.bindPopup('<b>Tokyo, Japan</b>');
		
var marker_Hakone = L.marker([35.2530315575035, 139.03455324030182]).addTo(map)
		.bindPopup('<b>Hakone, Japan</b>');

// Marker for Matsumoto, Japan
var marker_Matsumoto = L.marker([36.239276977822605, 137.9615780199902]).addTo(map)
  .bindPopup('<b>Matsumoto, Japan</b>');

// Marker for Kiso-Fukushima Station, Japan
var marker_KisoFukushima = L.marker([35.84471108820155, 137.7005482100582]).addTo(map)
  .bindPopup('<b>Kiso-Fukushima Station, Japan</b>');

// Marker for Magomejuku, Japan
var marker_Magomejuku = L.marker([35.53152854867819, 137.57561301904914]).addTo(map)
  .bindPopup('<b>Magomejuku, Japan</b>');

// Marker for Kyoto, Japan
var marker_Kyoto = L.marker([35.003479441756326, 135.76968116896512]).addTo(map)
  .bindPopup('<b>Kyoto, Japan</b>');

// Marker for Hiroshima, Japan
var marker_Hiroshima = L.marker([34.39659176634488, 132.47295677911163]).addTo(map)
  .bindPopup('<b>Hiroshima, Japan</b>');

// Marker for Málaga, Spain
var marker_Malaga = L.marker([36.71975962386915, -4.425933571672597]).addTo(map)
  .bindPopup('<b>Málaga, Spain</b>');

// Marker for Córdoba, Spain
var marker_Cordoba = L.marker([37.88799335912853, -4.7786519243124745]).addTo(map)
  .bindPopup('<b>Córdoba, Spain</b>');

// Marker for Lisbon, Portugal
var marker_Lisbon = L.marker([38.717181277247406, -9.136402150654948]).addTo(map)
  .bindPopup('<b>Lisbon, Portugal</b>');

// Marker for Buenos Aires, Argentina
var marker_BuenosAires = L.marker([-34.602714692775436, -58.411337606572886]).addTo(map)
  .bindPopup('<b>Buenos Aires, Argentina</b>');

// Marker for El Calafate, Argentina
var marker_ElCalafate = L.marker([-51.50514009999999, -72.24114999999998]).addTo(map)
  .bindPopup('<b>El Calafate, Argentina</b>');

// Marker for El Chalten, Argentina
var marker_Elchalten = L.marker([-51.53450000000001, -72.89049999999999]).addTo(map)
  .bindPopup('<b>El Chaltén, Argentina</b>');

// Marker for Medellín, Colombia
var marker_Medellin = L.marker([6.248420499999999, -75.56337000000001]).addTo(map)
  .bindPopup('<b>Medellín, Colombia</b>');

// Marker for Jardín, Antioquia, Colombia
var marker_Jardin = L.marker([6.225546, -75.351656]).addTo(map)
  .bindPopup('<b>Jardín, Antioquia, Colombia</b>');

// Marker for Bogotá, Colombia
var marker_Bogota = L.marker([4.710554895320076, -74.07898317009074]).addTo(map)
  .bindPopup('<b>Bogota, Colombia</b>');

// Marker for Panama City, Panama
var marker_PanamaCity = L.marker([9.037870417705983, -79.48066475897875]).addTo(map)
  .bindPopup('<b>Panama City, Panama</b>');

// Marker for Athens, Greece
var marker_Athens = L.marker([37.98647911848844, 23.732156432783075]).addTo(map)
  .bindPopup('<b>Athens, Greece</b>');

// Marker for Heraklion, Crete
var marker_Heraklion = L.marker([35.335314131313226, 25.136614901378124]).addTo(map)
  .bindPopup('<b>Heraklion, Crete</b>');

// Marker for Chania, Crete
var marker_Chania = L.marker([35.508657095234675, 24.02336350905322]).addTo(map)
  .bindPopup('<b>Chania, Crete</b>');

// Marker for Sfakia, Crete
var marker_Sfakia = L.marker([35.27871569336184, 24.06382141572054]).addTo(map)
  .bindPopup('<b>Sfakia, Crete</b>');

// Marker for Alones, Crete
var marker_Alones = L.marker([35.2391979250124, 24.34313831413394]).addTo(map)
  .bindPopup('<b>Alones, Crete</b>');

// Marker for Milan, Italy
var marker_Milan = L.marker([45.464259456124104, 9.19201563844311]).addTo(map)
  .bindPopup('<b>Milan, Italy</b>');

// Marker for Rapallo, Italy
var marker_Rapallo = L.marker([44.350868186403474, 9.229014475640742]).addTo(map)
  .bindPopup('<b>Rapallo, Italy</b>');

// Marker for Portofino, Italy
var marker_Portofino = L.marker([44.30317572833741, 9.20951254216496]).addTo(map)
  .bindPopup('<b>Portofino, Italy</b>');

// Marker for Montipuliciano, Italy
var marker_Montipuliciano = L.marker([43.0987230419902, 11.786992477662354]).addTo(map)
  .bindPopup('<b>Montipuliciano, Italy</b>');

// Marker for Napoli, Italy
var marker_Napoli = L.marker([40.85141238875326, 14.258101154084914]).addTo(map)
  .bindPopup('<b>Napoli, Italy</b>');

// Marker for Bologna, Italy
var marker_Bologna = L.marker([44.496568778061636, 11.348840336014902]).addTo(map)
  .bindPopup('<b>Bologna, Italy</b>');

// Marker for Florence, Italy
var marker_Florence = L.marker([43.77587354496639, 11.260182541515258]).addTo(map)
  .bindPopup('<b>Florence, Italy</b>');

// Marker for Rome, Italy
var marker_Rome = L.marker([41.89168782779945, 12.49293714315022]).addTo(map)
  .bindPopup('<b>Rome, Italy</b>');
