const router = require("express").Router();
const agendaController = require("../../controllers/agendaController");

router.route("/") 
  .get(agendaController.find)
  .put(agendaController.update)
  .post(agendaController.create)
  .delete(agendaController.remove);
  

module.exports = router; 