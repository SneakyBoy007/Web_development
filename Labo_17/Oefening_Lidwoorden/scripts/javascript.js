 const setup = () => {
     let tekst = "De jongen zat op dezelfde bank ";
     console.log("Oorspronkelijke tekst:");
     console.log(tekst);

// Functie om 'de' te vervangen door 'het'


     let aangepasteTekst = vervangDeDoorHet(tekst);
     console.log("\nTekst met 'de' vervangen door 'het':");
     console.log(aangepasteTekst);

 }

 function vervangDeDoorHet(tekst) {
     let woorden = tekst.split(" ");
     for (let i = 0; i < woorden.length; i++) {
         if (woorden[i] === "de") {
             woorden[i] = "het";
         } else if (woorden[i] === "De"){
             woorden[i] = "Het";
         }
     }
     return woorden.join(" ");
 }
window.addEventListener("load", setup);
