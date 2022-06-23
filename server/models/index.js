const db = require('../sql');

module.exports = {
  getRecipe: function(callback) {
    db.all(`SELECT * FROM recipes WHERE LENGTH(imageUrl)>0 ORDER BY random() LIMIT 100`, [], function(err, data) {
      if (err) {
        console.log(err);
      } else {
        callback(err, data);
      }
    })
  },

}
