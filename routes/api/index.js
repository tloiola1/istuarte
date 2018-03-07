const router = require("express").Router();
const productsRoutes = require("./products");
const agendaRoutes = require("./agenda");
const adminRoutes = require("./admin");
const userRoutes = require("./user");
const cmsRoutes = require("./cms");


// Property routes
router.use("/products",productsRoutes);
router.use("/agenda",agendaRoutes);
router.use("/admin",adminRoutes);
router.use("/user",userRoutes);
router.use("/cms", cmsRoutes);

module.exports = router;