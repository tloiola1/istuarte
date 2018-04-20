const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/") 
  .get(adminController.find)
  .put(adminController.update)
  .post(adminController.create)
  .delete(adminController.remove);

module.exports = router; 