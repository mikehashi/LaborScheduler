const router = require("express").Router();
const empRoutes = require("./emps");

// Book routes
router.use("/emps", empRoutes);

module.exports = router;
