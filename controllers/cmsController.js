const db = require("../models");

// Defining methods for the CmsController
module.exports = {
  find: function(req, res) {
    console.log("Cms Controller Get");
    db.Cms
      .find()
      .then(_data => {console.log("_data"); console.log(_data); res.json(_data);})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Cms Controller Post");
    console.log(req.body);
    db.Cms
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Cms Controller Update");
    console.log(req.body);
    db.Cms
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Cms Controller Remove");
    console.log(req.body);
    db.Cms
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }
};
