class BookManager {

    #books;

    constructor(books) {
        this.#books = [];

    }

    get() {
        return this.#books;
    }

    set books(books) {
        this.#books = books;

    }

    findAllBooks() {
        return this.#books;
    }

    findBookById(id) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === id) {
                return this.#books[i];
            }
            else {
                return null;
            }
        }
    }

    findBooksByTitle(title) {

    }

    findBooksByAuthor(author) {

    }

    findBooksByPublicationYear(year) {

    }

    createBook(book) {

    }

    deleteBook(bookId) {

    }

    editBook(book) {

    }

    save() {
        let jsonBook = JSON.stringify(books);
        sessionStorage.setItem("books", jsonBook);
    }

    load() {
        let booksStorage = JSON.parse(sessionStorage.getItem("books"));
        let newBooks = [];

        for (let i = 0; i < booksStorage.length; i++) {
            let parseBook = JSON.parse(booksStorage[i]);
            let newBook = new Book(parseBook.id, parseBook.title, parseBook.author, parseBook.publicationDate, parseBook.totalPages, parseBook.excerpt, parseBook.coverImage);
            newBooks.push(newBook);
        }
    }
}

export { BookManager };