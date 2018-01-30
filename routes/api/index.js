const router = require("express").Router();
const bookRoutes = require("./books");
const activityRoutes = require("./activities");

// Book routes
router.use("/activities",activityRoutes);
router.use("/books", bookRoutes);


module.exports = router;
