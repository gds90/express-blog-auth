const users = require('../users.json');

const isAdmin = (req, res, next) => {
    const { username, password } = req.user;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user || !user.admin) {
        return res.status(403).json({
            code: 403,
            message: 'Non sei autorizzato, solo gli admin hanno accesso a questa risorsa.'
        })
    }

    next();
}

module.exports = {
    isAdmin
}