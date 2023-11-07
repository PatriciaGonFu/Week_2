import { Person } from "./person";

let patricia = new Person ('Patricia','Gonzalez Fuertes', 165, 55, 1979, ['leer','cocinar','viajar']);
console.log(patricia);
let imc = patricia.lib.calculoImc();
let edad = patricia.lib.calculoEdad();
console.log(imc);
console.log(edad);

