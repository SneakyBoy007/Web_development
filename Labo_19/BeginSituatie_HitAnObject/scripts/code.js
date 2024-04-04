let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0,
    currentPosition: { x: 0, y: 0 }
};

let object;
let scoreDisplay;
let startButton;

const setup = () => {
    object = document.getElementById('object');
    scoreDisplay = document.getElementById('score');
    startButton = document.getElementById('startButton');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'
        object.style.display = 'block'
        moveObject();
        clearInterval(global.timeoutId);
        global.timeoutId = setInterval(moveObject, global.MOVE_DELAY);

    });

    object.addEventListener('click', () => {
        if (parseInt(object.src.split('/').pop().split('.')[0]) === 0) {
            gameOver();
        } else {
            global.score++;
            scoreDisplay.textContent = global.score;

            moveObject();

            clearInterval(global.timeoutId);
            global.timeoutId = setInterval(moveObject, global.MOVE_DELAY);

        }


    });
};


const moveObject = () => {
    let randomX = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    let randomY = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));

    global.currentPosition.x = randomX;
    global.currentPosition.y = randomY;

    object.style.left = global.currentPosition.x + 'px';
    object.style.top = global.currentPosition.y + 'px';

    let randomImageIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    object.src = global.IMAGE_PATH_PREFIX + randomImageIndex + global.IMAGE_PATH_SUFFIX;
};

const gameOver = () => {
    clearInterval(global.timeoutId);
    alert('Game Over! Your score is ' + global.score);
    startButton.style.display = 'block';
    global.score = 0;
    scoreDisplay.textContent = 0;
};

window.addEventListener('load', setup);
