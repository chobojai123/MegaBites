const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Comments = require('../database/comments.js');
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/recipe', (req, res) => {

  res.send('bye');
})


app.get('/recipe/:id', (req, res) => {
  Comments.getComments(req.params.id)
    .then((recipes) => {
      res.status(200);
      res.send(recipes);
    })
    .catch((err) => {
      res.status(400)
      res.end('Failed to get comments', err);
    });
});

let port = 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

