let personen = [];



const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let nieuwePersoon;

    if (document.getElementsByClassName("invalid").length === 0) {
        const voornaam = document.getElementById("txtVoornaam").value;
        const familienaam = document.getElementById("txtFamilienaam").value;
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const aantalKinderen = document.getElementById("txtAantalKinderen").value;

        nieuwePersoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboorteDatum: geboorteDatum,
            email: email,
            aantalKinderen: aantalKinderen
        };

       let selectedIndex = document.getElementById("lstPersonen").selectedIndex;

        if (selectedIndex === -1) {
            // Nieuwe persoon toevoegen
            personen.push(nieuwePersoon);
        } else {
            // Bestaande persoon bewerken
            personen[selectedIndex] = nieuwePersoon;
        }

        // Update de lijst met personen
        updatePersonenLijst();

        // Maak het formulier leeg
        resetFormulier();
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("lstPersonen").selectedIndex = -1;
    resetFormulier();
};

// Update de lijst met personen in de UI
const updatePersonenLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");

    // Eerst de lijst leegmaken
    lstPersonen.innerHTML = "";

    // Vervolgens alle personen toevoegen aan de lijst
    personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index;
        lstPersonen.add(option);
    });
};

// Maak het formulier leeg
const resetFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};



// Bij het selecteren van een persoon in de lijst, toon de gegevens in het formulier
const toonGeselecteerdePersoon = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const geselecteerdePersoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
        document.getElementById("txtFamilienaam").value = geselecteerdePersoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = geselecteerdePersoon.geboorteDatum;
        document.getElementById("txtEmail").value = geselecteerdePersoon.email;
        document.getElementById("txtAantalKinderen").value = geselecteerdePersoon.aantalKinderen;
    }
};

const voegStandaardPersonenToe = () => {
    personen.push(
        {
            voornaam: 'Jan',
            familienaam: 'Janssens',
            geboorteDatum: new Date('2010-10-10'),
            email: 'jan@example.com',
            aantalKinderen: 0
        },
        {
            voornaam: 'Mieke',
            familienaam: 'Mickelsen',
            geboorteDatum: new Date('1980-01-01'),
            email: 'mieke@example.com',
            aantalKinderen: 1
        },
        {
            voornaam: 'Piet',
            familienaam: 'Pieters',
            geboorteDatum: new Date('1970-12-31'),
            email: 'piet@example.com',
            aantalKinderen: 2
        }
    );
    updatePersonenLijst();
};
// Onze setup functie die de event listeners registreert
const setup = () => {
    const btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    const btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon);

    voegStandaardPersonenToe();
};

window.addEventListener("load", setup);
