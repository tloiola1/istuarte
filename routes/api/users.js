const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/") 
  .get(userController.find)
  .put(userController.update)
  .post(userController.create)
  .delete(userController.remove);

module.exports = router; 