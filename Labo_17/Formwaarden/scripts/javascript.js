// In het bestand scripts/javascript.js

const setup = () => {
    const isRoker = document.getElementById('isRoker').checked;
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked').value;
    const favorieteBuurland = document.getElementById('favorieteBuurland').value;
    const bestelling = [...document.getElementById('bestelling').selectedOptions].map(option => option.value);

    console.log('Is roker:', isRoker);
    console.log('Moedertaal:', moedertaal);
    console.log('Favoriete buurland:', favorieteBuurland);
    console.log('Bestelling:', bestelling);
}

window.addEventListener("load", setup);

window.toonResultaat = () => {
    const isRoker = document.getElementById('isRoker').checked;
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked').value;
    const favorieteBuurland = document.getElementById('favorieteBuurland').value;
    const bestelling = [...document.getElementById('bestelling').selectedOptions].map(option => option.value);

    console.log('Is roker:', isRoker);
    console.log('Moedertaal:', moedertaal);
    console.log('Favoriete buurland:', favorieteBuurland);
    console.log('Bestelling:', bestelling);
}
