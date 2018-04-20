const db = require("../models");

// Defining methods for the AgendaController
module.exports = {
  find: function(req, res) {
    console.log("Agenda Controller Get");
    db.Agenda
      .find()
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Agenda Controller Post");
    console.log(req.body);
    db.Agenda
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Agenda Controller Update");
    console.log(req.body);
    db.Agenda
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Agenda Controller Remove");
    console.log(req.body);
    db.Agenda
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }
};
