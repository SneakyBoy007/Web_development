const setup = () => {
    let printButton = document.getElementById("printButton");

    printButton.addEventListener("click", printCharacters);

    printCharacters();
}

const printCharacters = ()=> {
    const inputField = document.getElementById('inputText');
    let spacedText = maakMetSpaties(inputField.value);

    console.log(spacedText);
}

const maakMetSpaties = (inputText) => {
    return inputText.split('').join(' ');
}

window.addEventListener("load", setup);
