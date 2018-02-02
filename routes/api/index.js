const router = require("express").Router();
const bookRoutes = require("./books");
const activityRoutes = require("./activities");
const authRoutes = require("./authenticationAPI");

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  
// console.log(authRoutes);

// Book routes
router.use("/activities", requireAuth, activityRoutes);
router.use("/books", requireAuth, bookRoutes);
router.use("/authenticate",authRoutes);


module.exports = router;
