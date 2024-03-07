const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoekString = "an";
    let count = 0;
    let index = tekst.indexOf(zoekString);

    while (index !== -1) {
        count++;
        index = tekst.indexOf(zoekString, index + 1);
    }

    console.log("Het aantal keer dat 'an' voorkomt met indexOf is: " + count);

    count = 0;
    index = tekst.lastIndexOf(zoekString);

    while (index !== -1) {
        count++;
        index = tekst.lastIndexOf(zoekString, index - 1);
    }

    console.log("Het aantal keer dat 'an' voorkomt met lastIndexOf is: " + count);

}
window.addEventListener("load", setup);
