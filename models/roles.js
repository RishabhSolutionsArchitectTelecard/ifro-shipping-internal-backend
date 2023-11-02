const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Role = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  roleName: { type: String, required: true }, // e.g., 'admin', 'user', etc.
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }], // Example array of permissions
  value: { type: String },
});

module.exports = mongoose.model("Role", Role);
