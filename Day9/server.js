const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blogdb')
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch((err) => {
        console.error('Error', err);
    });

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        bio: {
            type: String
        }
    }, 

    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('Blog API');
})

app.post('/users/register', async(req, res) => {
    const { name, email, password } = req.body;
    return res.send({ name, email, password });
})

app.post('/users/login', async(req, res) => {
    return res.send('Login');
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})