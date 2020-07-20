const router = require("express").Router();
const questionRoutes = require("./questions");

// questions routes
router.use("/questions", questionRoutes);

module.exports = router;
