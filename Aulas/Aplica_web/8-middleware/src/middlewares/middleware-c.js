module.exports = function (req, res, next) {
    console.log('Executando o middleware C')
    req.middlewareC = 'OK também!'
    next()
}