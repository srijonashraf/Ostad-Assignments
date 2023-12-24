const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, default: null }, // Use 'default' for optional fields
  phoneNumber: { type: String, default: null }, 
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
