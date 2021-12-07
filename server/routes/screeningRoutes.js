const router = require("express").Router();

const { Screening } = require("../persistence/screening.js");
const { Movie } = require("../persistence/movie.js");
const error = require;

router.put("/create", (req, res, next) => {
  const screening = new Screening(req.body);
  console.log(req.body);
  console.log("======")
  console.log(screening);
  /*screening
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
  
    });*/
  
  //This sucks
  
  let film = Movie.findOne({ _id: req.body.movieId });
  const listScreenings = film;
  console.log("======");
  console.log(listScreenings);
  console.log("======")
  film.screenings.push(screening)
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
    });

});




router.get("/getAll", (req, res) => {
  Screening.find((error, screeningList) => {
    if (error) {
      console.log(`Error: (: ${error})`);
    }
    res.status(200).send(screeningList);
  });
});

module.exports = router;
