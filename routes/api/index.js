const router = require("express").Router();
const bookRoutes = require("./books");
const activityRoutes = require("./activities");
const authRoutes = require("./authenticationAPI");

// console.log(authRoutes);

// Book routes
router.use("/activities",activityRoutes);
router.use("/books", bookRoutes);
router.use("/authenticate",authRoutes);


module.exports = router;
