const router = require("express").Router();
const cmsController = require("../../controllers/cmsController");

  router.route("/") 
  .get(cmsController.find)
  .put(cmsController.update)
  .post(cmsController.create)
  .delete(cmsController.remove);

module.exports = router; 