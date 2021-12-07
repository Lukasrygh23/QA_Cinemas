const router = require("express").Router();

const { Movie } = require("../persistence/movie.js");
const error = require;

router.post("/create", (req, res, next) => {
  const movie = new Movie(req.body);
  console.log(req.body);
  console.log(movie);

  movie
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  Movie.find((error, movieList) => {
    if (error) {
      console.log(`Error: (: ${error})`);
    }
    res.status(200).send(movieList);
  });
});

module.exports = router;
