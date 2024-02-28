let familie = ['Arjan', 'Pol', 'Mano', 'Merel', 'Ruben'];
console.log(familie.length);
console.log(familie[0]);
console.log(familie[2]);
console.log(familie[4]);

const VoegNaamToe =(naam) =>{
    familie.push(naam);
}

let extraPersoon = prompt("Geef een jouw nieuwe naam in: ", "Pol");
VoegNaamToe(extraPersoon);
console.log(familie);

console.log(familie.join());