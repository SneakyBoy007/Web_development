const setup = () => {
    let knop = document.getElementById("knop").addEventListener("click", uitvoeren);
}

const uitvoeren = () =>{
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.textContent = 'Good Job!';
    });
}

window.addEventListener("load", setup);
