const router = require("express").Router();
const agendaRoutes = require("./agenda");
const cmsRoutes = require("./cms");
const adminRoutes = require("./admin");
const usersRoutes = require("./users");


// Property routes
router.use("/agenda", agendaRoutes);
router.use("/cms",cmsRoutes);
router.use("/admin",adminRoutes);
router.use("/users",usersRoutes);

module.exports = router;