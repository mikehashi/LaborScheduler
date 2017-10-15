const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  empNum: { type: Number, required: true },
  crew: { type: String, required: true }
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;
