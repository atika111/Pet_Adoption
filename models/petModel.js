const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  type: String,
  name: String,
  adoptionStatus: String,
  picture: String,
  height: String,
  weight: String,
  color: String,
  bio: String,
  hypoallergenic: Boolean,
  dietaryRestrictions: String,
  breed: String,
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
