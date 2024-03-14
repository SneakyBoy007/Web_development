const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.classList.add("invalid");
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.classList.remove("invalid");
		errVoornaam.innerHTML = "";
	}
};

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	if (familienaam === "") {
		txtFamilienaam.classList.add("invalid");
		errFamilienaam.innerHTML = "verplicht veld";
	} else if (familienaam.length > 50) {
		txtFamilienaam.classList.add("invalid");
		errFamilienaam.innerHTML = "max 50 karakters";
	} else {
		txtFamilienaam.classList.remove("invalid");
		errFamilienaam.innerHTML = "";
	}
};

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();
	const datePattern = /^\d{4}-\d{2}-\d{2}$/;
	if (geboortedatum === "") {
		txtGeboortedatum.classList.add("invalid");
		errGeboortedatum.innerHTML = "verplicht veld";
	} else if (!datePattern.test(geboortedatum)) {
		txtGeboortedatum.classList.add("invalid");
		errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
	} else {
		txtGeboortedatum.classList.remove("invalid");
		errGeboortedatum.innerHTML = "";
	}
};

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email === "") {
		txtEmail.classList.add("invalid");
		errEmail.innerHTML = "verplicht veld";
	} else if (!emailPattern.test(email)) {
		txtEmail.classList.add("invalid");
		errEmail.innerHTML = "geen geldig email adres";
	} else {
		txtEmail.classList.remove("invalid");
		errEmail.innerHTML = "";
	}
};

const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderen = parseInt(txtAantalKinderen.value.trim());
	if (isNaN(aantalKinderen) || aantalKinderen < 0) {
		txtAantalKinderen.classList.add("invalid");
		errAantalKinderen.innerHTML = "is geen positief getal";
	} else if (aantalKinderen >= 99) {
		txtAantalKinderen.classList.add("invalid");
		errAantalKinderen.innerHTML = "is te vruchtbaar";
	} else {
		txtAantalKinderen.classList.remove("invalid");
		errAantalKinderen.innerHTML = "";
	}
};

window.addEventListener("load", setup);
