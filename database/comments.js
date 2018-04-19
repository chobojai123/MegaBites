const db = require('./index.js');

const getComments = (recipeID) => {
  return new Promise((resolve, reject) => {
    db.Comments.find({ id: recipeID })
      .then((results) => { resolve(results) })
      .catch((err) => { reject(err) })
  });
};

module.exports.getComments = getComments;
