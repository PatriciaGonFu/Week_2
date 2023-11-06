import {Person} from "./person"

let person1 = new Person('Jacobo',42, 'Calle Jacinto 5');
person1.printname();
person1.yearOfBirth(2023);
console.log(person1.yearOfBirth(2023));
person1.setAddress('Camino Real 2');
person1.getAddress();
console.log(person1.getAddress());

