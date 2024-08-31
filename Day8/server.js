const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

// Middleware for setting CSS, images files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing body
app.use(express.urlencoded({ extended: true }));

const port = 8080;
let contact_obj = { username: "", email: "" };

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.post('/contact', (req, res) => {
    console.log(req.body);
    contact_obj = req.body;
    console.log(contact_obj);
    res.redirect('/user');
})

app.get('/user', (req, res) => {
    res.render('user', contact_obj);
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})