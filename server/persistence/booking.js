//screening
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  id: number,
  numberOfSeats: number,
  //ChildSchema here
  consessions: String, //Considered changing to array.
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking: Booking };
