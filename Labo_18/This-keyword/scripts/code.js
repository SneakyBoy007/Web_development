const setup = () => {
    document.getElementById("txtParagraaf").addEventListener("click",show);
    document.getElementById("txtParagraaf").addEventListener("click",showArrowFunctie);
    document.getElementById("txtParagraaf").addEventListener("click",showArrowFunctieTarget);
};
window.addEventListener("load", setup);


// functie NIET in een arrow notatie
function show ()
{
    //In event handlers, this refers to the HTML element that received the event:
  console.log("functie met keyword this : ", this.innerHTML);
}

// functie in een arrow notatie
const showArrowFunctie = () =>
{
    console.log("arrow functie met keyword this : ", this.innerHTML); // je zal undefined krijgen -> je krijgt de Window-object terug
   // uitleg: https://wesbos.com/arrow-functions-this-javascript/

    console.log ("arrow functie met keyword this : ", this.innerWidth); // -> je zal de breedte van het scherm krijgen (innerWidth is een property van het Window object)

};


//oplossing
// functie in een arrow notatie
const showArrowFunctieTarget = (event) => {

console.log("arrow functie met target : ",event.target.innerHTML);
}
;




