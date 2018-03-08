const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/") 
  .get(userController.Get)
  .post(userController.Post);

module.exports = router; 