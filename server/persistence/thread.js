//review
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  username: String,
  text: String
  //This is a very imaginiative Schema
});

const threadSchema = new Schema({
  id: number,
  userName: String,
  rating: { type: Number, min: 0, max: 10 },
  reviewBody: String,
  comments: [commentSchema],
  comment: commentSchema
});

const Thread = model("Thread", threadSchema);

module.exports = { Thread: Thread };
