const setup = () => {
    let knopje = document.getElementById("knop");
    let txtOutput = document.getElementById("txtOutput");

    const copy = () => {
        let txtInput = document.getElementById("txtInput");
        txtOutput.innerHTML= txtInput.value;
    }

    knopje.addEventListener("click", copy);
}
window.addEventListener("load", setup);