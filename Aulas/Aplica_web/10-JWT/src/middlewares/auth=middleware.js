
const jwt = require('jsonwebtoken');
const users = require('../models/users');


const secretKey = 'senha-provisoria-acessando'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        return res.status(401).json({ message: 'Não autorizado!'})
    }

    const token = authHeader.split(' ')[1]

    try {

        const decodedToken =  jwt.verify(token, secretKey)

        const user = users.find(user => user.username === decodedToken.username)

        if(!user) {
            return res.status(401).json( { message: 'Usuário não encontrado!'})
        }

        req.authenticatedUser = user

        next()

    } catch (error) {
        return res.status(401).json({ message: 'Token invalido!'})
    }

    
}

module.exports = authMiddleware