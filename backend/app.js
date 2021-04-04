const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const posts = [
    {
        id: "123nklasdf",
        title: "First Post",
        content: "First post content."
    },
    {
        id: "234sdfgdfsg",
        title: "Second Post",
        content: "Second post content."
    }
];

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
    const post = req.body;
    posts.push(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get("/posts", (req, res, next) => {
    res.json({
        data: posts
    });
});

module.exports = app;