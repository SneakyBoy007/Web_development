
const setup = () => {


    let mijnVerjaardag = new Date(2005, 7, 17);
    let huidigeDatum = new Date();
    let verschilInMilliseconden = huidigeDatum - mijnVerjaardag;
    let verschilInDagen = Math.floor(verschilInMilliseconden / (1000 * 60 * 60 * 24));

    console.log("Ik leef al:", verschilInDagen," dagen!");

}
window.addEventListener("load", setup);
