let global = {
    history: []
}

const setup = () => {
    document.getElementById('btnGo').addEventListener('click', zoek);
    if(localStorage.getItem('history') !== null) {
        restore();
    }
}

const zoek = () => {
    let command = document.getElementById('commandoInput').value.trim();
    if(command.charAt(0) !== '/' || command.charAt(2) !== ' ') {
        alert('Invalid command');
    }
    else {
        let prefix = command.charAt(1);
        let zoekOpdracht = command.slice(3);
        let url;
        switch (prefix) {
            case 'g':
                url = 'https://www.google.com/search?q=' + zoekOpdracht;
                window.open(url);
                UpdateGeschiedenis('Google', zoekOpdracht, url);
                break;
            case 'y':
                url = 'https://www.youtube.com/search?q=' + zoekOpdracht;
                window.open(url);
                UpdateGeschiedenis('Youtube', zoekOpdracht, url);
                break;
            case 't':
                url = 'https://www.twitter.com/search?q=' + zoekOpdracht;
                window.open(url);
                UpdateGeschiedenis('Twitter', zoekOpdracht, url);
                break;
            case 'i':
                url = 'https://www.instagram.com/explore/search/keyword/?q=' + zoekOpdracht;
                window.open(url);
                UpdateGeschiedenis('Instagram', zoekOpdracht, url);
                break;
            default:
                alert('Unknown command prefix')
        }
    }
}

const UpdateGeschiedenis = (titel, text, url) => {
    global.history.push({
        titel: titel,
        text: text,
        url: url
    })
    createCard(titel, text, url);
    localStorage.setItem('history', JSON.stringify(global.history));
}

const createCard = (titel, text, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(titel.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", titel);
    let cardText = createElementWithClassNameAndText("p", "card-text", text);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(titel.toLowerCase()+"button");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
}

const createElementWithClassName = (element, className) => {
    let NewElement = document.createElement(element);
    NewElement.setAttribute("class", className);
    return NewElement;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let NewElement = createElementWithClassName(element, className);
    NewElement.appendChild(document.createTextNode(text));
    return NewElement;
}

const createLinkButton = (url) => {
    let newButton = document.createElement("a");
    newButton.href = url;
    newButton.classList.add('btn');
    newButton.classList.add('btn-primary');
    newButton.target = '_blank';
    newButton.appendChild(document.createTextNode("Go!"));
    return newButton;
}

const restore = () => {
    global.history = JSON.parse(localStorage.getItem('history'));

    for(let i = 0; i < global.history.length; i ++) {
        createCard(global.history[i].titel, global.history[i].text, global.history[i].url);
    }
}

window.addEventListener("load", setup);
