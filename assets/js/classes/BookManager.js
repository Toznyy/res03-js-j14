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
        
    }
    
    findBookById(id) {
        
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
        
    }
    
    load() {
        
    }
}

export { BookManager };