const router = require("express").Router();

const { Movie } = require("../persistence/movie.js");
const error = require;

router.post("/create", (req, res, next) => {
  const movie = new Movie(req.body);
  //console.log(req.body);
  //console.log(movie);

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

//this method uses the id listed for the film and not the object id
//created by mongodb
router.get("/getById/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(req.params.id);
  Movie.find({ id: id }, (error, result) => {
    if (error) {
      next(error);
    } else {
      res.status(200).send(result);
    }
  });
});

router.delete("/deleteById/:id", (req, res, next) => {
  const id = req.params.id;
  //console.log(req.params.id);
  Movie.deleteOne({ id: id }, (error, result) => {
    if (error) {
      next(error);
    } else {
      res.status(204).send(`movie with id ${id} deleted.`);
    }
  })
})

module.exports = router;
