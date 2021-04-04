const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://inferno:g8c7IDN5Mi5LDxr6@cluster0.1p50o.mongodb.net/post-manager?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
        console.log('Connected to database!!');
    })
    .catch((err) => {
        console.error('Connection Failed!!');
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, PATCH, DELETE, OPTIONS, POST"
    );
    next();
});

app.post("/post", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then((createdPost) => {
        res.status(201).json({  
            message: 'Post added successfully',
            postId: createdPost._id
        });
    });
});

app.get("/posts", (req, res, next) => {
    Post.find()
        .then((documents) => {
            res.json(documents);
        });
});

app.delete("/posts/:id", (req, res, next) => {
    Post.deleteOne({_id: req.params.id})
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: "Post Deleted!"
            });
        })
        .catch((err) => {

        });
})

module.exports = app;