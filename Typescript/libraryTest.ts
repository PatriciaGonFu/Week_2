import { Book } from "./book";
import { Library } from "./library";

const myLibrary = new Library([], "Dirección de la Biblioteca", "Gerente de la Biblioteca");
const book1: Book = new Book("Reina Roja", 568, "9788466664417", "Juan Gómez Jurado", "Ediciones B");
const book2: Book = new Book("La novia gitana", 408, "9788466372985", "Carmen Mola", "Debolsillo");
const book3: Book = new Book("Esperando el diluvio", 576, "9788423362479", "Dolores Redondo", "Destino");
console.log(myLibrary.toString());

myLibrary.getBook().push(book1);
myLibrary.getBook().push(book2);
myLibrary.getBook().push(book3);

console.log(myLibrary.toString());


let libroPreferido = myLibrary.findByAuthor("Dolores Redondo");
console.log(libroPreferido);

