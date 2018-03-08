const db = require("../models");

// Defining methods for the userController
module.exports = {
  Get: function(req, res) {
    console.log("User Controller Get");
    db.User
      .find()
      .then(_User => res.json(_User))
      .catch(err => res.status(422).json(err));
  },
  Post: function(req, res) {
    console.log("User Controller Post");
    console.log(req.body);
    db.User
      .create(req.body)
      .then(_User => res.json(_User))
      .catch(err => res.status(422).json(err));
  }

};
