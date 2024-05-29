require('dotenv').config();
const express = require('express');
const errorsFormatter = require('./middlewares/errorsFormatter.js');
const errorsNotFound = require('./middlewares/errorsNotFound.js');
const port = process.env.PORT || 3000;
const postsRouter = require("./routers/posts.js");
const authController = require('./controllers/auth.js');

const app = express();

// Asset statico per la cartella public
app.use(express.static('public'));
app.use(express.json());

app.post('/login', authController.login);

// Post router
app.use("/posts", postsRouter);

// redirect 
app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.use(errorsFormatter);
app.use(errorsNotFound);

// Server in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});