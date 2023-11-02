const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for the permission model

const Permission = new Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  action: { type: String, required: true }, // E.g., read, write, delete, etc.
  resource: { type: String, required: true }, // E.g., user, post, comment, etc.
  description: { type: String }, // Optional description of the permission
});

module.exports = mongoose?.model("Permissions", Permission);
