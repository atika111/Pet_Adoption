const Ajv = require("ajv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/authModel");
require("dotenv").config();

const ajv = new Ajv();

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Authorization headers required");
  }
  const token = req.headers.authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    req.body.userId = decoded.id;
  });
  next();
};

const validateBody = (schema) => {
  return (req, res, next) => {
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      return res
        .status(400)
        .send(` Your ${ajv.errors[0].instancePath} ${ajv.errors[0].message}`);
    }
    next();
  };
};

// -------------SignUp---------------

const passwordMatch = (req, res, next) => {
  const isMatch = req.body.password !== req.body.repPassword;
  if (isMatch) {
    return res
      .status(400)
      .send("Incorrect password. Please double-check your password.");
  }
  next();
};
const doseUserExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(400)
      .send("Email address already exists. Please use a different email.");
  }
  next();
};
const encryptPassword = (req, res, next) => {
  const saltRounds = 10;
  const plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send("Error hashing password");
    }
    req.body.password = hashedPassword;
    req.body.repPassword = hashedPassword;
    next();
  });
};

// -------------LogIn--------------

const isExistingUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(400).send("User not found. Please log in again.");
    return;
  }
  next();
};
const verifyPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).send("User not found. Please log in again.");
  }

  const isVerified = await bcrypt.compare(password, user.password);
  if (!isVerified) {
    return res.status(400).send("Wrong password. Please try again.");
  }
  req.body.userId = user._id;
  next();
};

module.exports = {
  verifyToken,
  // SignUp
  validateBody,
  encryptPassword,
  doseUserExist,
  passwordMatch,
  // LogIn
  isExistingUser,
  verifyPassword,
};
