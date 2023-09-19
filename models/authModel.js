const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  address: String,
  phoneNumber: Number,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', userSchema);

module.exports = User;



























// const fs = require("fs");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const pathToUserDbJson = path.resolve(__dirname, "../db/userDb.json");

// const getUserByEmailModal = (email) => {
//   try { 
//     const allUsers = JSON.parse(fs.readFileSync(pathToUserDbJson, "utf8") || "[]");
//     const user = allUsers.find((user) => user.email === email);
//     return user;
//   } catch (error) {
//     console.log("error: ", error);
//     return []
//   }
// };

// const createUserModal = (newUser) => {
//   try {
//     newUser.id = uuidv4();
//     const allUsers = getAllUsersModel();
//     allUsers.push(newUser);
//     fs.writeFileSync(pathToUserDbJson, JSON.stringify(allUsers));
//     return true;
//   } catch (error) {
//     console.log("error: ", error);
//     throw Error("Something went wrong");
//   }
// };

// const getAllUsersModel = () => {
//   try {
//     const allUsers = JSON.parse(fs.readFileSync(pathToUserDbJson) || "[]");
//     return allUsers;
//   } catch (error) {
//     console.log("error: ", error);
//     return []
//   }
// };

// module.exports = { getUserByEmailModal, createUserModal, getAllUsersModel };
