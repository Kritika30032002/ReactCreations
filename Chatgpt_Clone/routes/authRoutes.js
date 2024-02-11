const express = require("express");
const { registerController, loginController, logoutController, errorHandler } = require("../controllers/authController");

// Create router object
const router = express.Router();

// Register route
router.post("/register", registerController);

// Login route
router.post("/login", loginController);

// Logout route
router.get("/logout", logoutController);

// Error handler middleware
router.use(errorHandler);

module.exports = router;
