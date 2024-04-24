let teller=0; // de globale variabele voor onze teller

const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
}

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	teller++;
	txtResult.innerHTML="De waarde van de teller is " + teller;
}

window.addEventListener("load", setup);