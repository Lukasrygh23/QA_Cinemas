//booking
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema(
  {
    // id: Number,
    bookingName: { type: String, required: true },
    movieTitle: { type: String, required: true },
    screenType: { enum: ["Regular", "Deluxe"], type: String },
    numberOfSeats: Number,
    adult: Number,
    child: Number,
    date: Date,
    time: String,
    consessions: Boolean, //Considered changing to array.
    price: Number,
  },
  {
    versionKey: false,
  }
);

const Booking = model("Booking", bookingSchema);

module.exports = { Booking: Booking };
