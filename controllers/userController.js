const User = require("../models/authModel");

async function sendLoggedInUser(req, res) {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId, "firstName lastName isAdmin");

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

module.exports = { sendLoggedInUser };
