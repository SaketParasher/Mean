const express = require('express');
const body_parser = require('body-parser');
const app = express();

let posts = [
  {
    id: 'hgfdloi243',
    title: '11 Minutes',
    content: 'An Awesome Novel by Paulo Cohelo'
  },
  {
    id: 'affelki941',
    title: 'The Alchemist',
    content: 'Another Awesome Novel by Paulo Cohelo'
  }
]

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Data was Posted Successfully'
  })
})

app.get('/api/posts', (req, res, next) => {

  res.status(200).json({
    message: 'Posts Sent successfully',
    posts: posts
  })
});

module.exports = app;
