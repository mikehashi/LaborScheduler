const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
  _id: { type: Number, required: true },
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  PPR: { type: Number, required: true },
  Crew: { type: String, required: true }
  // A330PW: { type: Boolean },
  // B737NG: { type: Boolean },
  // B757: { type: Boolean },
  // B767300: { type: Boolean },
  // B767400: { type: Boolean },
  // B777ER: { type: Boolean },
  // B777LR: { type: Boolean }
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;
