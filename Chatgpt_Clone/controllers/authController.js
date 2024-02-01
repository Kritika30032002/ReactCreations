const errorHandler = require("../middlewares/errorMiddleware");
const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");

// JWT TOKEN
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

// REGISTER
exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // Check if email already exists
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already registered", 400));
    }
    // Create new user
    const user = await userModel.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// LOGIN
exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Validate email and password
    if (!email || !password) {
      return next(new errorResponse("Please provide email and password", 400));
    }
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid credentials", 401));
    }
    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid credentials", 401));
    }
    // Send token
    sendToken(user, 200, res);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// LOGOUT
exports.logoutController = async (req, res, next) => {
  try {
    // Clear refresh token
    res.clearCookie("refreshToken");
    // Send success response
    res.status(200).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Apply error handler middleware
exports.errorHandler = errorHandler;
