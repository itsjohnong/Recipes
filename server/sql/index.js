const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("../database/recipes.db",
function (err) {
  if (err) {  return console.error(err);  }
  else {  console.log("Connected to the database."); }
});

module.exports = db;