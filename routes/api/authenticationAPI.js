const AuthenticationController = require('../../controllers/authentication'),
      express = require('express'),
      passportService = require('../../passport'),
      passport = require('passport');


// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

// // Constants for role types
// const REQUIRE_ADMIN = "Admin",
//       REQUIRE_OWNER = "Owner",
//       REQUIRE_CLIENT = "Client",
//       REQUIRE_MEMBER = "Member";

  // Initializing route groups

  // apiRoutes = express.Router(),
    const authRoutes = express.Router();

  //=========================
  // Auth Routes
  //=========================

  // Set auth routes as subgroup/middleware to apiRoutes
  // apiRoutes.use('/auth', authRoutes);

  // Registration route
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

// Set url for API group routes
  // app.use('/api', apiRoutes);

module.exports = authRoutes;
