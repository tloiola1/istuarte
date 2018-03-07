const router = require("express").Router();
const cmsController = require("../../controllers/cmsController");

// Matches with "/api/cms"
router.route("/")
  .get(cmsController.findAll)
  .post(cmsController.create);

// Matches with "/api/cms/:id"
router
  .route("/:id")
  .get(cmsController.findById)
  .put(cmsController.update)
  .delete(cmsController.remove);

module.exports = router;