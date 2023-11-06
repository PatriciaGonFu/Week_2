"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setNpages = function (newNpages) {
        this.nPages = newNpages;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (newIsbn) {
        this.isbn = newIsbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        this.author = newAuthor;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    return Book;
}());
exports.Book = Book;
toString();
string;
{
    return "".concat(this);
}
