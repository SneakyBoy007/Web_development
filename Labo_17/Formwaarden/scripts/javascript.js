const setup = () => {
    toonResultaat();
}

window.addEventListener("load", setup);

window.toonResultaat = () => {
    if (!document.getElementById("isRoker").checked) {
        console.log("Is geen roker");
    } else {
        console.log("Is een roker");
    }

    console.log(`Moedertaal is ${document.querySelector("input[name='moedertaal']:checked")?.value || "niet geselecteerd"}`);

    if (!document.getElementById("favorieteBuurland").value) {
        console.log("Favoriete buurland is niet geselecteerd")
    } else {
        console.log(`Favoriete buurland is ${document.getElementById("favorieteBuurland").value}`);
    }

    if (!document.getElementById("bestelling").value) {
        console.log("Bestelling bestaat uit niets");
    } else {
        console.log(`Bestelling bestaat uit ${Array.from(document.getElementById("bestelling").selectedOptions, option => option.value).join(" ")}`);
    }
}
