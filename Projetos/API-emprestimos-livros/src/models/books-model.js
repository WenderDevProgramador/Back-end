const HttpError = require('../../errors/HttpError');

const uuid = require('uuid').v4;


let books = [
    { id: '1', title: 'Book One', author: 'Author One', quantityAvaible: 4 },
    { id: '2', title: 'Book Tow', author: 'Author Tow', quantityAvaible: 3 }
]


module.exports = {
    getAll: () => books.map(book => ({ id: book.id, title: book.title})),

    getBookById: (id) => books.find(book => book.id === id),

    createBook: (title, author, quantityAvaible) => {
        const newBook = {
            id: uuid().split('-')[2],
            title,
            author,
            quantityAvaible
        }

        books.push(newBook)
        return newBook
    },

    updateBook: (id, updateBook) => {
        const bookIndex = books.findIndex(book => book.id === id)

        if (bookIndex === -1) throw new HttpError(404,'Livro não encontrado.')

        books[bookIndex] = {...books[bookIndex], ...updateBook}

        return books[bookIndex]

    },

    deleteBook: (id) => {
        const bookIndex = books.findIndex(book => book.id === id)

        if (bookIndex === -1) throw new HttpError(404,'Livro não encontrado.')

        const deletedBook = books[bookIndex]

        books = books.filter(book => book.id !== id)

        return deletedBook
    }

}


