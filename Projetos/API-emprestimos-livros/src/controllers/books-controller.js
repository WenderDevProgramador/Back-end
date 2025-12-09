const booksModel = require("../models/books-model")


module.exports = {
    // GET/api/books

    index: (req, res) => {
        const books = booksModel.getAll()
        res.json(books)
    },

    // GET/api/books/:id

    show: (req, res) => {
        const { id } = req.params
        const book = booksModel.getBookById(id)
        if (!book) return res.status(404).json({ message: 'Livro não encontrado.' })
        res.json(book)
    },

    // POST /api/books

    save: (req, res ) => {
        const { title, author, quantityAvaible } = req.body

        if (typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvaible !== 'number') {
            return res.status(400).json({ message: 'Dados inválidos.'})
        }

        const newBook = booksModel.createBook(title, author,quantityAvaible)

        res.status(201).json(newBook)
    },

    // PUT /api/books/:id
    update: (req, res) => {
        const { id } = req.params
        const { title, author, quantityAvaible } = req.body
        const fieldsTupdate = {}

        if (title) fieldsTupdate.title = title
        if (author) fieldsTupdate.author = author
        if (quantityAvaible) fieldsTupdate.quantityAvaible = quantityAvaible


        const updateBook = booksModel.updateBook(id,fieldsTupdate)

        return res.status(200).json(updateBook)
    },

    // DELETE /api/books/:id

    delete: (req, res) => {
        const { id } = req.params

        const deletedBook = booksModel.deleteBook(id)
        return res.status(204).json(deletedBook)
    }
}