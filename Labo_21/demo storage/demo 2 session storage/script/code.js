const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
}

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCount=0;
	if(typeof(Storage)=="undefined") {
	  txtResult.innerHTML="Sorry, uw browser ondersteunt geen web storage...";
	} else {
		clickCount=sessionStorage.getItem("demo.clickCount");
		if (clickCount) {
			clickCount=parseInt(clickCount)+1;
		} else {
			clickCount=1;
			
		}
		sessionStorage.setItem("demo.clickCount", clickCount.toString());
		txtResult.innerHTML="De waarde van de teller is " + clickCount;
	}
}

window.addEventListener("load", setup);