const model = require('../models');
require("dotenv").config();

module.exports = {
  recipe: function (req, res) {
    model.getRecipe((err, results) => {
      if (err) {
        console.log(err)
      } else {
        res.status(201).send(results);
      }
    })
  },

}
