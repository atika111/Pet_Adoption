const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/authModel");
require("dotenv").config();

const createUser = (newUser) => {
  return User.create({
    email: newUser.email,
    password: newUser.password,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    address: newUser.address,
    phoneNumber: newUser.phoneNumber,
    isAdmin: false, //checkListAdmins(newUser.email)
  });
};

const signup = async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.send(createdUser);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const {userId} = req.body;
  try {
    const payload = {
      id: userId,
    };

    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: 3600}
      );

    res.send({
      accessToken: accessToken,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ error: "Something went wrong", status: "fail" });
  }
};

const logout = (req, res) => {
};

module.exports = {
  signup,
  login,
  logout,
};
