const usersModel = require("../models/users-model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
    // POST/auth/register

    register: (req, res) => {
        const { name, email, password} = req.body

        if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid input data types'})
        }

        const existingUser = usersModel.getUserByEmail(email)

        if(existingUser) {
            return res.status(400).json({ message: 'Email já em uso...'})
        }

        const newUser = usersModel.createUser(name, email, password)

        

        return res.status(201).json({...newUser, password: undefined})
    },
    
    // POST/auth/login

    login: (req, res) => {
        const {email , password} = req.body

        if(typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid input data types'})
        }

        const user = usersModel.getUserByEmail(email)

        if(!user) {
            return res.status(400).json({ message: 'Usuário não encontrado...'})
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if(!isValidPassword) {
            return res.status(400).json({ message: 'Dados inseridos inválidos...'})
        }

        const payload = {id: user.id, email: user.email}
        const token = jwt.sign( payload, process.env.JWT_KEY, { expiresIn: '1h'})

        return res.status(200).json({token})
    }


    
}