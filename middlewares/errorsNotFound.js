module.exports = (req, res, next) => {
    const statusCode = 400;
    const message = 'Pagina non trovata';

    res.status(statusCode).json({
        code: statusCode,
        message: message
    });
};