import { Book } from "./book";

class Library {
    private books: [];
    private address : string;
    private manager : string;

    constructor (books:[],address:string,manager:string )
    {
        this.books = [];
        this.address = address;
        this.manager = manager;
    }

    public getAddress ():string{
        return this.address
    }
    public setAddress (newAdress : string):void{
        this.address = newAdress
    }
    public getManager ():string{
        return this.manager
    }
    public setManager (newManager : string):void{
        this.manager = newManager
    }
    public toString ():string {

    }


}