
let student1 = {
    naam: "Arjan Reynaert",
    leeftijd: 18,
    studie: "Informatica",
    vakken: ["Programmeren", "Databases", "Webontwikkeling"],
    adres: {
        straat: "Grote Ieperstraat 139",
        stad: "Gullegem",
        postcode: "8560"
    }
};

const setup = () => {

    let student1JSON = JSON.stringify(student1);

    console.log(student1JSON);
}
window.addEventListener("load", setup);
