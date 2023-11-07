let {Person} = require ("./person.js")

let patricia = new Person ('Patricia','Gonzalez Fuertes', 165, 55, 1979, ['leer','cocinar','viajar']);
console.log(patricia);
let imc = patricia.calculoImc();
let edad = patricia.calculoEdad();
console.log(imc);
console.log(edad);



