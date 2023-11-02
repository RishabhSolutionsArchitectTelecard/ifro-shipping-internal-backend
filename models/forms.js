const mongoose = require("mongoose");
const fieldSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [fieldSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Form", formSchema);
