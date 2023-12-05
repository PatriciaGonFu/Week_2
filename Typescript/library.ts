import { Book } from "./book";

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getBook(): Book[]{
        return this.books;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getManager(): string {
        return this.manager;
    }

    public setManager(manager: string): void {
        this.manager = manager;
    }

    public toString(): string {    
            return `Books- ${this.books}
                    Address - ${this.address}
                    Manager - ${this.manager}`  
    }
    

    public getNumberOfBooks():number{
        return this.books.length
    }

    public findByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }
}



