//screening
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const screeningSchema = new Schema({
  id: Number,
  screenNumber: Number,
  screenType: { enum: ["Regular", "Deluxe"] },
  date: Date,
  time: String,
});

const Screening = model("Screening", screeningSchema);

module.exports = { Screening: Screening };
