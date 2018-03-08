const router = require("express").Router();
const agendaController = require("../../controllers/agendaController");

router.route("/") 
  .get(agendaController.Get)
  .post(agendaController.Post);

module.exports = router; 