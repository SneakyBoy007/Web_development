const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
let isBusy = false;

const kaartNamen = ['kaart1.jpg', 'kaart2.jpg', 'kaart3.jpg', 'kaart4.jpg', 'kaart5.jpg', 'kaart6.jpg'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    const board = document.querySelector('.memory-board');
    shuffle(kaartNamen);
    for (let i = 0; i < AANTAL_HORIZONTAAL * AANTAL_VERTICAAL; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-card', kaartNamen[i]);
        card.addEventListener('click', flipCard);
        const img = document.createElement('img'); // create img element
        img.src = 'img/' + kaartNamen[i]; // set src attribute with folder 'img/'
        img.classList.add('card-image'); // add class to style image if necessary
        card.appendChild(img); // append image to card
        board.appendChild(card);
    }
}

function flipCard() {
    if (isBusy) return;
    if (this.classList.contains('flipped')) return;

    this.classList.add('flipped');

    const flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === 2) {
        isBusy = true;
        checkMatch();
        setTimeout(() => {
            isBusy = false;
        }, 1000);
    }
}

function checkMatch() {
    const flippedCards = document.querySelectorAll('.flipped');
    const [card1, card2] = flippedCards;

    if (card1.dataset.card === card2.dataset.card) {
        card1.classList.add('match');
        card2.classList.add('match');
        setTimeout(() => {
            card1.style.visibility = 'hidden';
            card2.style.visibility = 'hidden';
        }, 1000);
    } else {
        card1.classList.add('no-match');
        card2.classList.add('no-match');
        setTimeout(() => {
            card1.classList.remove('flipped', 'no-match');
            card2.classList.remove('flipped', 'no-match');
        }, 1000);
    }
}

document.addEventListener('load', createBoard);
