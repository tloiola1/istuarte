const db = require("../models");

// Defining methods for the userController
module.exports = {
  get: function(req, res) {
    console.log("Admin Controller Get");
    db.Admin
      .find()
      .then(_Admin => res.json(_Admin))
      .catch(err => res.status(422).json(err));
  },
  post: function(req, res) {
    console.log("Admin Controller Post");
    console.log(req.body);
    db.Admin
      .create(req.body)
      .then(_Admin => res.json(_Admin))
      .catch(err => res.status(422).json(err));
  }

};
