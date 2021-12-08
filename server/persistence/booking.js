//booking
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  id: Number,
  numberOfSeats: Number,
  //ChildSchema here
  consessions: String, //Considered changing to array.
  screening: String,
  seats: [
    { type: Schema.Types.ObjectId, ref: "Seat", }]
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking: Booking };
