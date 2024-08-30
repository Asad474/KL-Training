const express = require('express');

const app = express();

// Template means html file in express.
// Routing /, /login, /register.
app.set('view engine', 'ejs');

//Build in Middleware
//For fetching post form data
app.use(express.urlencoded({ extended: true }));

//Custom Middleware
const loginMiddleware = (req, res, next) => {
    console.log('User authenticated.');
    next();
}

app.get('/', loginMiddleware, (req, res) => {
    console.log('Index');
    res.render('index');
    // res.send('Hello');
})

app.get('/login', (req, res) => {
    // res.status(200).send({name: 'Login'})
    res.render('login');
})

app.get('/user', (req, res) => {
    res.render('user');
})

app.post('/login', (req, res) => {
    console.log('Post');
    console.log(req.body);
    res.redirect('/user');
})

app.listen(8000, () => {
    console.log('Server is running at port 8000');
})