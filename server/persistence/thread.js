//review
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const threadSchema = new Schema({
  id: number,
  userName: String,
  rating: { type: Number, min: 0, max: 10 },
  reviewBody: String,
});

const Thread = model("Thread", threadSchema);

module.exports = { Thread: Thread };
