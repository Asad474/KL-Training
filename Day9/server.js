const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        }, 

        category: {
            type: String,
        },

        content: {
            type: String, 
            required: true,
        }
    }, 

    {
        timestamps: true,
    }
)

const Blog = mongoose.model('Blog', blogSchema);

app.get('/', (req, res) => {
    res.send('Blog API');
})

app.post('/users/register', async(req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('All input fields are required.');
    }

    if (await User.findOne({ email })){
        return res.status(400).send('User is already registered with this email id.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
        name, 
        email, 
        password: hashedPassword,
    });

    return res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email,
    });
})

app.post('/users/login', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Both Email and password fields are required.');
    }

    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)){
        return res.status(400).send('User does not exists.');
    }

    return res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
    });
})

app.get('/blog', async(req, res) => {
    const blogs = await Blog.find({});
    return res.send(blogs);
})

app.post('/blog', async(req, res) => {
    const { title, category, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('All input fields are required.');
    }

    const blog = await Blog.create({ title, category, content });
    return res.status(201).send(blog);
})

app.get('/blog/:_id', async(req, res) => {
    const { _id } = req.params;
    const blog = await Blog.findById(_id);

    if (!blog){
        return res.status(400).send('Invalid Id');
    }

    return res.send(blog);
})

app.put('/blog/:_id', async(req, res) => {
    const { title, category, content } = req.body;
    const { _id } = req.params;

    const blog = await Blog.findByIdAndUpdate(_id, { $set: { title, category, content } });

    if (!blog){
        return res.status(400).send('Invalid Id');
    }

    return res.send(blog);
})

app.delete('/blog/:_id', async(req, res) => {
    const { _id } = req.params;

    const blog = await Blog.findByIdAndDelete(_id);

    if (!blog){
        return res.status(400).send('Invalid Id');
    }

    return res.send('Deleted');
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})