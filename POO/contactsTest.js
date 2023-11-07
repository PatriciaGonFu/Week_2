let {Person} = require ("./person.js")
let {Contacts} = require ("./contacts.js")

let agenda = new Contacts()
agenda.person = [
    new Person ('Patricia','Gonzalez Fuertes', 165, 55, 1979, ['leer','cocinar','viajar']),
    new Person ('Jacobo','Argüelles Baquero',175,69,1981,['jugar al fúrbol','comer','viajar']),
    new Person ('Virginia','Tellez Dos Santos', 160,60,1981,['huerto urbano','caminar','bordar'])
];

let imc = agenda.calculoImc();
let edad = agenda.calculoEdad();
console.log(imc);
console.log(edad);

agenda.printPersons();


