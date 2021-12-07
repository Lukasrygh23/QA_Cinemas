//importing mongoose
const mongoose = require("mongoose");
//Create Schema and Model
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  movieTitle: String,
  id: Number, //Not autoincrement for once haha
  runTime: Number, //Hundreds of Minutes for now.
  BBFCRating: {
    enum: ["U", "PG", "12A", "15", "18", "R18"],
    type: String,
  }, //Currently an ENUM
  criticRating: {
    type: Number,
    min: 0,
    max: 100,
  },
  releaseDate: { type: Date },
  director: String,
  cast: [{ type: String }], //This is just a list of actors, you can change it later if you need it.
  synopsis: String,
  imageURL: String,
  newRelease: Boolean,
  screenings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Screening",
    },
  ],
});

const Movie = model("Movie", movieSchema);

module.exports = { Movie: Movie };
