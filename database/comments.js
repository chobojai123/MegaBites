const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  recipeName: String,
  comments: [
    { commentsText: String,
      fullName: String,
      created_At: String,
      image: String,
    }
  ],
});

const Comments = mongoose.model('recipe', commentSection);


const getComment = (recipeID) => {
  return new Promise((resolve, reject) => {
    Comments.find({id: recipeID})
      .then((results) => { resolve(results) })
      .catch((err) => { reject(err) })
  });
};


module.exports.Comments = Comments;
module.exports.getComment = getComment;
