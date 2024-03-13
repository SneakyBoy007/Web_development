const setup = () => {

    let tekst ="onoorbaar"

    for(let i = 0; i < tekst.length; i++){
        if( !((i+3) > tekst.length)){
            console.log(tekst.slice(i,i+3));
        }

    }

}
window.addEventListener("load", setup);

