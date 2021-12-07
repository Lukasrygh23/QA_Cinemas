//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const movieSchema = new Schema({});

const Movie = model("Movie", movieSchema);

module.exports = { Movie: Movie };
