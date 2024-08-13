class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    toString() {
        return `${this.title} - ${this.description} - ${this.author}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, description, author, id) {
        this.books.splice(Number(id), 0, new Book(title, description, author));
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        this.books.splice(Number(id), 1);
    }

    getBookById(id) {
        const book = this.books[Number(id)];
        return book ? [book.title, book.description, book.author] : null;
    }

    updateBookById(id, title, description, author) {
        this.books[Number(id)] = new Book(title, description, author);
    }
}
