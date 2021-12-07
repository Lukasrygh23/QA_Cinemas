//booking
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  id: number,
  numberOfSeats: number,
  //ChildSchema here
  consessions: String, //Considered changing to array.
  screening: String,
  Seats: [{Type: Schema.Types.ObjectId, ref:"Seat"}]
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking: Booking };
