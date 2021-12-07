//seat
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const seatSchema = new Schema({
  id: number,
  seatNumber: String,
  adult: Boolean,
});

const Seat = model("Seat", seatSchema);

module.exports = { Seat: Seat };
