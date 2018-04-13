const mongoose = require('mongoose');
const db = require('./index.js');
//const seed = require('./seed.js');
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  recipeName: String,
  fullName: String,
  comments: {
    commentsText: String,
    fullName: String,
    created_At: String,
  }
});

const Comments = mongoose.model('recipe', commentSection);

// fetching function
const fetch = () => {
  return new Promise(function(resolve, reject) {
    Comments.find(null, null, {sort: {'created_At': -1}})
      .then((results) => {resolve(results)})
      .catch((err) => {reject(err)})
  });
};


module.exports.Comments = Comments;
module.exports.fetch = fetch;
