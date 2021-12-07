const router = require("express").Router();

const { Screening } = require("../persistence/screening.js");
const error = require;

router.post("/create", (req, res, next) => {
  const screening = new screening(req.body);
  console.log(req.body);
  console.log(screening);

  screening
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  Screening.find((error, movieList) => {
    if (error) {
      console.log(`Error: (: ${error})`);
    }
    res.status(200).send(movieList);
  });
});

module.exports = router;
