const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/") 
  .get(adminController.get)
  .post(adminController.post);

module.exports = router; 