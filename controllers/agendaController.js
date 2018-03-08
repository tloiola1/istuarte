const db = require("../models");

// Defining methods for the userController
module.exports = {
  Get: function(req, res) {
    console.log("Agenda Controller Get");
    db.Agenda
      .find()
      .then(_Agenda => res.json(_Agenda))
      .catch(err => res.status(422).json(err));
  },
  Post: function(req, res) {
    console.log("Agenda Controller Post");
    console.log(req.body);
    db.Agenda
      .create(req.body)
      .then(_Agenda => res.json(_Agenda))
      .catch(err => res.status(422).json(err));
  }

};
