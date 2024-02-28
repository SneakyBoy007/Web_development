const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btnWijzig = document.getElementById("knop");
    const wijzig = ()=> {
        pElement.innerHTML='Gutentag!';
    }
    btnWijzig.addEventListener('click', wijzig);
}
window.addEventListener("load", setup);