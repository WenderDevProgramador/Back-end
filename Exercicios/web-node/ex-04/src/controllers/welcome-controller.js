module.exports = {
    // GET /welcome

    welcome: (req, res) => {
        const displayName = req.autenticatedUser?.name ?? 'Visitante'

        res.json( { message: 'Seja bem-vindo(a)!,' + displayName + '!'})
    }
}