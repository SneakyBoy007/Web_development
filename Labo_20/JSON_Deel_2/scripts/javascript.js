
let student1JSON = '{"naam":"Arjan Reynaert","leeftijd":18,"studie":"Informatica","vakken":["Programmeren","Databases","Webontwikkeling"],"adres":{"straat":"Grote Ieperstraat 139","stad":"Gullegem","postcode":"8560"}}';

const setup = () => {
    let student1Object = JSON.parse(student1JSON);
    for (let key in student1Object) {
        if (typeof student1Object[key] === 'object') {
            console.log(key + ":");
            for (let innerKey in student1Object[key]) {
                console.log("  " + innerKey + ": " + student1Object[key][innerKey]);
            }
        } else {
            console.log(key + ": " + student1Object[key]);
        }
    }
}
window.addEventListener("load", setup);
