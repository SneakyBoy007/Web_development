const setup = () => {
let foto = document.getElementById("img_kiezer").addEventListener("change", veranderFoto);
let tekens = document.getElementById("tekens").addEventListener("change", telKarakters);

}

const veranderFoto = () =>{

    let keuze = document.getElementById("img_kiezer").value;
    let div = document.getElementById("img");
    let tekst = document.getElementById("note");
    if (keuze === "zonder ei"){
        div.classList.remove("hidden");
        tekst.innerHTML = "Hierboven, een kip " + keuze + "."
    } else if(keuze == "met ei"){
        div.classList.remove("hidden");
        div.classList.add("with-egg");
        tekst.innerHTML = "Hierboven, een kip " + keuze + "."
    } else if(keuze === ""){
        div.classList.add("hidden");
    }


}

const telKarakters = () =>{
    let teken = document.getElementById("tekens").value;
    let tekst = document.getElementById("note").value;
    let antwoord = document.getElementById("note2");
    tekst = tekst.toLowerCase();
    teken = teken.toLowerCase();

    tekst = tekst.split("");
    let count;
    for(let i = 0; i < tekst.length; i++){
        if(tekst[i] === teken){
            count++;
        }
    }
    antwoord.innerHTML = "Letter \"" + teken + "\" komt " + count + "keer voor in bovenstaande zin."
}
window.addEventListener("load", setup);
