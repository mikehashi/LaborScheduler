const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const etopsSchema = new Schema({
  empNum: { type: Number, required: true },
  A330PW: { type: Boolean },
  B737NG: { type: Boolean },
  B757: { type: Boolean },
  B767300: { type: Boolean },
  B767400: { type: Boolean },
  B777ER: { type: Boolean },
  B777LR: { type: Boolean }
});

const Etops = mongoose.model("Etops", etopsSchema);

module.exports = Etops;