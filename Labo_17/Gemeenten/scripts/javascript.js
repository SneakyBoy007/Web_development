const setup = () => {
    gemeenten();
}

const gemeenten = () => {
    let selectie = document.getElementById("gemeente");
    let opties = [];
    let input = "";

    while (input !== "stop") {
        if (input !== "") {
            let optie = document.createElement("option");
            optie.text = input;
            opties.push(optie)
        }
        input = prompt("Gemeente:") || "";
    }

    opties = opties.sort(optionSorter);

    for (let i = 0; i < opties.length; ++i) {
        selectie.options.add(opties[i]);
    }
}

const optionSorter = (a, b) => {
    return a.text.localeCompare(b.text);
}

window.addEventListener("load", setup);