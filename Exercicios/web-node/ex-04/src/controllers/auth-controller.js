const users = require("../models/users")
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/environment')

module.exports = {

    //POST/auth/register
    register: (req, res) => {
        const { name, email, password } = req.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {

            return res.status(400).json({ message: 'Dados de formato invalido!' })
        }

        const registeredUser = users.registerUser(name, email, password)

        if (!registeredUser) return res.status(400).json({ message: 'Usuario já registrado!' })

    },

    // POST/auth/login
    login: (req, res) => {
        const { email, password } = req.body

        if (typeof email !== 'string' || typeof password !== 'string') {

            return res.status(400).json({ message: 'Dados de formato invalido!' })
        }

        const user = users.findByEmail(email)

        if(!user) return res.status(404).json({ message: 'Usuario nao encontrado!'})

        if(user.password !== password) {
            return res.status(401).json({ message: 'Credenciais invalida!'})
        }

        const payload = { id: user.id, email: user.email}

        const token = jwt.sign(payload,JWT_SECRET, {expiresIn: '1d'})

        res.json({token})
    }
}