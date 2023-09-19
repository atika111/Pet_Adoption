const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { signupSchema, loginSchema } = require("../schemas/authSchemas");
const {
  verifyToken,
  validateBody,
  passwordMatch,
  doseUserExist,
  encryptPassword,
  isExistingUser,
  verifyPassword
} = require("../middleware/authenticationMiddleware");


// CREATE
router.post(
  "/login",
  isExistingUser,
  verifyPassword,
  authController.login
); // Login

router.post(
  "/signup",
  doseUserExist,
  passwordMatch,
  encryptPassword,
  authController.signup
); // Signup

router.post("/logout", authController.logout)

module.exports = router;
