const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');
const Promise = require('bluebird');
const request = require('request');
const Comments = require('../database/comments.js');

let app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));



app.post('/recipe', function (req, res) {

  res.send('hi');
})


app.get('/recipe', function (req, res) {
  return Comments.fetch()
  .then(function(recipes) {
    res.status(200);
    res.send(recipes);
  })
  .catch(function(err) {
    res.status(400)
    res.end('Failed to get comments', err);
  })
})


let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

