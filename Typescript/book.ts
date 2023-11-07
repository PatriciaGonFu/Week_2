export class Book {
    title: string;
    nPages: number;
    isbn: string;
    author: string;
    editorial: string;

    constructor (title:string, nPages:number, isbn:string, author:string, editorial:string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public setTitle(newTitle:string):void {
            this.title = newTitle
    }
    
    public getTitle():string{
            return this.title
    }

    public setNpages(newNpages:number):void {
            this.nPages = newNpages
    }

    public getNpages():number{
        return this.nPages
    }

    public setIsbn(newIsbn:string):void {
        this.isbn = newIsbn
    }

    public getIsbn():string{
        return this.isbn
    }

    public setAuthor(newAuthor:string):void {
        this.author = newAuthor
    }

    public getAuthor():string{
        return this.author
    }

    public setEditorial(newEditorial:string):void {
        this.editorial = newEditorial
    }

    public getEditorial():string{
        return this.editorial
    }

    public toString (): string {
        return `${this}`
    }
}
