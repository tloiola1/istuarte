const db = require("../models");

// Defining methods for the userController
module.exports = {
  find: function(req, res) {
    console.log("User Controller Get");
    db.User
      .find()
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("User Controller Post");
    console.log(req.body);
    db.User
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("User Controller Update");
    console.log(req.body);
    db.User
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("User Controller Remove");
    console.log(req.body);
    db.User
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }
};
