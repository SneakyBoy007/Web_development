const setup = () => {

document.getElementById("knop").addEventListener("click", createAndAppendParagraph);
}

const createAndAppendParagraph=() =>{
    // Create a new paragraph element
    let paragraph = document.createElement("p");

    // Add some text to the paragraph
    let text = document.createTextNode("This is a dynamically created paragraph!");
    paragraph.appendChild(text);

    // Get the reference to the DIV element
    let div = document.getElementById("myDIV");

    // Append the paragraph to the DIV
    div.appendChild(paragraph);
}
window.addEventListener("load", setup);
