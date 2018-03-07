const router = require("express").Router();
const agendaController = require("../../controllers/agendaController");

// Matches with "/api/agenda"
router.route("/")
  .get(agendaController.findAll)
  .post(agendaController.create);

// Matches with "/api/agenda/:id"
router
  .route("/:id")
  .get(agendaController.findById)
  .put(agendaController.update)
  .delete(agendaController.remove);

module.exports = router;