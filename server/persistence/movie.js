//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const movieSchema = new Schema({
movieTitle: String,
  id: Number, //Not autoincrement for once haha
  runTime: Number, //Hundreds of Minutes for now.
  BBFCating: {enum : ["U", "PG", "12A", "15", "18", "R18"], description: "Can only be one of the BBFC ratings."}, //Currently an ENUM
  criticRating: {
    type:number, min:0, max:100
  },
  releaseDate: {type: Date},
  director: String, //This is just a list of actors, you can change it later if you need it.
  synopsis: String,
  imageURL: String,
  newRelease: Boolean
});

const Movie = model("Movie", movieSchema);

module.exports = { Movie: Movie };
