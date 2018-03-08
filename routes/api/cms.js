const router = require("express").Router();
const cmsController = require("../../controllers/cmsController");

router.route("/") 
  .get(cmsController.Get)
  .post(cmsController.Post);

module.exports = router; 