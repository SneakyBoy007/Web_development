const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk = true;
    let vandaag = new Date();


    print(`Type van leeftijd: ${typeof leeftijd}`);
    print(`Type van intrest: ${typeof intrest}`);
    print(`Type van isGevaarlijk: ${typeof isGevaarlijk}`);
    print(`Type van vandaag: ${typeof vandaag}`);
}
window.addEventListener("load", setup);

const print = (message) => {
    console.log(message);
    document.body.innerHTML += `<p>${message}</p>`;
};