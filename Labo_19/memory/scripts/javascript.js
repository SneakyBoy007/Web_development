const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
let count = 0;
let gevonden = 0;
let moves = 0;

const kaartNamen = ['kaart1.jpg', 'kaart2.jpg', 'kaart3.jpg', 'kaart4.jpg', 'kaart5.jpg', 'kaart6.jpg'];

const dubbeleKaarten = [];
kaartNamen.forEach(kaart => {
    dubbeleKaarten.push(kaart, kaart);
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const setup = () =>{
    createBoard();
}

const createBoard= () =>{
    const board = document.querySelector('.memory-board');
    shuffle(dubbeleKaarten);
    for (let i = 0; i < AANTAL_HORIZONTAAL * AANTAL_VERTICAAL; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = 'img/' + dubbeleKaarten[i];
        const kaartKlasse = dubbeleKaarten[i].split('.')[0];
        imgElement.classList.add(kaartKlasse);
        cardElement.appendChild(imgElement);

        board.appendChild(cardElement);

        cardElement.addEventListener('click', handleClick);
    }
}

const aangeklikt = (imgElement, cardElement) => {

    moves++;
    imgElement.style.display = 'block';
    cardElement.style.background = 'none';
    imgElement.classList.add('gekozenkaart');

    count++;

    if (count === 2 && gevonden !== 6) {
        controleren();
    }

    if (gevonden === 6){
        stoppen();
    }

}

const handleClick = (event) => {

    const cardElement = event.currentTarget; // Haal het huidige doelelement op (de kaart)
    const imgElement = cardElement.querySelector('img'); // Vind de afbeelding binnen de kaart
    aangeklikt(imgElement, cardElement)

}


const controleren = () => {
    count = 0;
    const gekozenKaarten = document.querySelectorAll('.gekozenkaart');


    const eersteKaartKlassen = Array.from(gekozenKaarten[0].classList);
    const tweedeKaartKlassen = Array.from(gekozenKaarten[1].classList);


    const klassenOvereenkomen = eersteKaartKlassen.every(klasse => tweedeKaartKlassen.includes(klasse));

    if (klassenOvereenkomen) {
        console.log('Match gevonden!');
        gevonden++;
        gekozenKaarten.forEach(imgElement => {
            imgElement.parentElement.removeEventListener('click', handleClick);
            imgElement.classList.add('correct');
        });



    } else {
        gekozenKaarten.forEach(imgElement=>{
            imgElement.classList.add('incorrect');
        })
        setTimeout(() => {

            gekozenKaarten.forEach(imgElement => {
                imgElement.style.display = 'none';
                imgElement.parentElement.style.background = "";
                imgElement.classList.remove('gekozenkaart');
                imgElement.classList.remove("incorrect")
            });
        }, 1000);

    }
    gekozenKaarten.forEach(imgElement => {
        imgElement.classList.remove('gekozenkaart');
    });
}

const stoppen = () => {
    setTimeout(() => {
        alert(`Gefeliciteerd! Je hebt gewonnen in ${moves} zetten.`);
        location.reload();
    }, 1000);
}



document.addEventListener('DOMContentLoaded', setup);
