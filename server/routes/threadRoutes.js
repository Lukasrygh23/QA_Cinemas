const router = require("express").Router();

const { Thread } = require("../persistence/thread.js");
const error = require;

router.post("/create", (req, res, next) => {
    const thread = new Thread(req.body);
    console.log(req.body);
    console.log(thread);

    thread
        .save()
        .then((result) => {
            res.status(201).send(`${result} saved to database!`);
        })
        .catch((error) => {
            next(error);
        });
});

router.get("/getAll", (req, res) => {
    Thread.find((error, threadList) => {
        if (error) {
            console.log(`Error: (: ${error})`);
        }
        res.status(200).send(threadList);
    });
});

module.exports = router;
