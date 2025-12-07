const uuid  = require('uuid').v4;
const bcrypt = require('bcrypt');


const users = [
    {id: '1' , name: 'Wender', email: 'wender@email.com', password: '123456'},
    {id: '2', name: 'Alice', email: 'alice@email.com', password:'654321'}
]


module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find( user => user.id === id),

    getUserByEmail: (email) => users.find( user => user.email === email),

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid().split('-')[2],
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        }

        users.push(newUser)

        return newUser
    }
}