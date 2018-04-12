const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  recipeName: String,
  fullName: String,
  comments: String,
  created_At: String, 
});



const Comments = mongoose.model('recipe', commentSection);

// fetching function
let fetch = () => {
  return new Promise(function (resolve, reject) {
    Comments.find(null, null, { sort: { 'created_At': -1 } })
      .then(function (results) {
        resolve(results);
      })
      .catch(function (err) {
        reject(err)
      })
  });
}


module.exports.comments = Comments;
module.exports.fetch = fetch;