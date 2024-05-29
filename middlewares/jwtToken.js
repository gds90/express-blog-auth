require('dotenv').config();
const jwt = require("jsonwebtoken");

const authenticationWithJWT = (req, res, next) => {
    // verifico che l'utente abbia un token 
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ codice: 401, messaggio: "Accesso negato, token mancante." });
    }
    // salvo il token in una variabile
    const token = authorization.replace('Bearer ', '');

    // verifico l'autenticità del token
    const user = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(statusCode).json({ statusCode, error: err.message });
        }
        // se il token è valido, lo salvo in req.user 
        req.user = user;
        next();
    }
    );
}

module.exports = {
    authenticationWithJWT
}