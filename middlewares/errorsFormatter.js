module.exports = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || 'Errore interno del server';

    res.status(statusCode).json({
        code: statusCode,
        message: message
    });
}