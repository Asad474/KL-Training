const express = require('express');
const path = require('path');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

//Connecting mongodb database with express
//1) Mongodb driver
//2) Mongoose

const app = express();

app.set('view engine', 'ejs');

// Middleware for setting CSS, images files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing body
app.use(express.urlencoded({ extended: true }));

const port = 8080;

// const client = new MongoClient('mongodb://localhost:27017');
// let db;

// client.connect()
//     .then(conn => {
//         console.log(`Connection established to ${conn.s.url}`);
//         db = conn.db('my_db');
//     })
//     .catch(err => console.error(err));
    
let db = mongoose.connect('mongodb://localhost:27017/my_db');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 

    email: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
});

const users = mongoose.model("User", UserSchema);

let contact_obj = { username: "", email: "" };

app.get('/', async(req, res) => {
    // let collection = await db.collection("posts");
    // let results = await collection.find({ isAdmin: false }).toArray();
    // console.log(results);
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.post('/contact', async(req, res) => {
    console.log(req.body);
    // contact_obj = req.body;
    // console.log(contact_obj);

    // const collection = await db.collection("users");
    // const results = await collection.insertOne(obj);
    const results = await users.create(req.body);
    console.log(results);

    res.redirect('/user');
})

app.get('/user', async(req, res) => {
    // const collection = await db.collection("users");
    // const results = await collection.find({}).sort({ $natural: -1 }).limit(1).toArray();
    const results = await users.find({}).sort({ _id: -1 }).limit(1)
    res.render('user', results[0]);
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})