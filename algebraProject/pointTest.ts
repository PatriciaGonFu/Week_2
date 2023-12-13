import { Point } from "./point";

let myPoint = new Point(3,4);

console.log("Coordenadas iniciales:");
console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());

myPoint.setX(7);
myPoint.setY(9);

console.log("Coordenada X:", myPoint.getX()); 
console.log("Coordenada Y:", myPoint.getY()); 

console.log(myPoint.toString());

let anotherPoint = new Point(6, 8);
console.log(myPoint.calculateDistance(anotherPoint)); 
