const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let btnSubstring = document.getElementById("knop");
    let beginNummer = document.getElementById("beginNummer");
    let eindeNummer = document.getElementById("eindNummer");
    let txtOutput = document.getElementById("txtOutput");

    const neemSubstring = (begin, einde) =>{
        begin = parseInt(beginNummer.value);
        einde =  parseInt(eindeNummer.value);
        let substring = txtInput.value.substring(begin, einde);
        txtOutput.innerHTML= substring;
    }

    btnSubstring.addEventListener('click', neemSubstring);
}
window.addEventListener("load", setup);