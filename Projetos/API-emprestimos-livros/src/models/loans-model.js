const uuid = require('uuid');
const booksModel = require('./books-model');
const HttpError = require('../../errors/HttpError');

let loans = [
    { id: '1', userId: '1', bookId: '1', loanDate: new Date('2024-01-15'), returnDate: null, isReturne: false, isLate: true },

    { id: '2', userId: '2', bookId: '2', loanDate: new Date('2024-02-20'), returnDate: new Date('2024-03-01'), isReturne: false, isLate: true },

    { id: '3', userId: '3', bookId: '3', loanDate: new Date('2024-03-05'), isReturne: false, isLate: true },
]


module.exports = {
    getAllLoans: () => loans,

    getLoanById: (id) => loans.find(loan => loan.id === id),

    createLoan: (user, book) => {
        if (book.quantityAvaible < 1) {
            throw new HttpError(400, 'Livro indisponível para empréstimo.')
        }

        const today = new Date();
        const returnDate = new Date();

        returnDate.setDate(today.getDate() + 14);

        const newLoan = {
            id: uuid.v4().split('-')[2],
            userId: user.id,
            bookId: book.id,
            loanDate: today,
            returnDate: returnDate,
            isReturne: false,
            isLate: false
        }

        loans.push(newLoan)

        booksModel.takeBook(book.id)

        return newLoan


    },

    returnLoan: (id) => {
        const loanIndex = loans.findIndex(loan => loan.id === id)

        if (loanIndex === -1) {
            throw new HttpError(404, 'Empréstimo não encontrado.')
        }

        const loan = loans[loanIndex]

        if(loan.isReturne) return null

        loan.isReturne = true
        const today = new Date()
        

        const limitDate = new Date(loan.returnDate)

        loan.isLate = today > limitDate

        loan.returnDate = today

        const book = booksModel.returnBook(loan.bookId)

        return loan


    }
}

