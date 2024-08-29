const express = require('express');

const app = express();

// Template means html file in express.
// Routing /, /login, /register.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    // res.status(200).send({name: 'Login'})
    res.render('login');
})

app.listen(8000, () => {
    console.log('Server is running at port 8080');
})