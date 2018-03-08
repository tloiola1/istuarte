const db = require("../models");

// Defining methods for the userController
module.exports = {
  Get: function(req, res) {
    console.log("CMS Controller Get");
    db.Cms
      .find()
      .then(_Content =>{console.log(_Content); res.json(_Content)})
      .catch(err => res.status(422).json(err));
  },
  Post: function(req, res) {
    console.log("CMS Controller Post");
    console.log(req.body);
    db.Cms
      .create(req.body)
      .then(_Content => res.json(_Content))
      .catch(err => res.status(422).json(err));
  }

};
