const router = require("express").Router();

const { Commment } = require("../persistence/comment.js");
const error = require;

router.post("/create", (req, res, next) => {
  const comment = new Commment(req.body);
  console.log(req.body);
  console.log(comment);

  comment
    .save()
    .then((result) => {
      res.status(201).send(`${result} saved to database`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  Comment.find((error, commentList) => {
    if (error) {
      console.log(`Error: ${error}`);
    }
    res.status(200).send(commentList);
  });
});

module.exports = router;
