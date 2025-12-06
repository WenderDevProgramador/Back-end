
const jwt = require('jsonwebtoken')


const { JWT_SECRET } = require('../config/environment')
const users = require('../models/users')


module.exports = {
    optionalAuth: (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            next()
        } else {
            const token = authHeader.split(' ')[1]

            try {

                const { id } = jwt.verify(token, JWT_SECRET)
                const user = users.findById(id)

                if (!user) return res.status(401).json({ message: 'Usuario não encontrado.' })

                req.autenticatedUser = user

                next()

            } catch (error) {
                console.log(error)
                return res.status(401).json({ message: 'Token inválido.' })
            }
        }
    },

    ensureAuth: (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ message: 'Token não fornecido.' })

        }

        const token = authHeader.split(' ')[1]

        try {


            const { id } = jwt.verify(token, JWT_SECRET)
            const user = users.findById(id)

            if (!user) return res.status(401).json({ message: 'Usuario não encontrado.' })

            req.autenticatedUser = user

            next()

        } catch (error) {
            return res.status(401).json({ message: 'Token inválido.' })
        }

    },

    ensureAdmin: (req, res, next) => {

        if (req.autenticatedUser?.role === 'admin') {
            next()
        } else {
            res.status(403).json({ message: 'Acesso negado. Requer privilégios de administrador.' })
        }

    }


}