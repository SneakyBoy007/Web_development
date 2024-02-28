const setup = () => {
    let knopje = document.getElementById("knop");
    let txtOutput = document.getElementById("txtOutput");

    const Kopiëren = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        let nieuweTekst = txtOutput.innerHTML= tekst;
    }

    knopje.addEventListener("click", Kopiëren);
}
window.addEventListener("load", setup);