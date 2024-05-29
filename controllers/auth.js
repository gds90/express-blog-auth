const jwt = require("jsonwebtoken");
const users = require('../users.json');

const generateToken = (user) => {
    const payload = user;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).send('Credenziali errate');
    }
    const token = generateToken(user);
    res.json({ token });
};

module.exports = {
    login
}