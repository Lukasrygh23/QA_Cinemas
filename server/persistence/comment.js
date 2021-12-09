//Comments
//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  username: String,
  text: String,
  thread: String
  //This is a very imaginiative Schema
});

const Comment = model("Comment", commentSchema);

module.exports = { Comment: Comment };
