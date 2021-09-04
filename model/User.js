const mongoose = require("mongoose");


// we will be only getting the phone number of the user
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);