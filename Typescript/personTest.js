"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var person1 = new person_1.Person('Jacobo', 42, 'Calle Jacinto 5');
person1.printname();
person1.yearOfBirth(2023);
console.log(person1.yearOfBirth(2023));
person1.setAddress('Camino Real 2');
person1.getAddress();
console.log(person1.getAddress());