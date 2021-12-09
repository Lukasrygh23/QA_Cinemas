const router = require("express").Router();

const { Thread } = require("../persistence/thread.js");
const { Comment } = require("../persistence/thread.js");
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

router.put("/addComment/:thread", (req, res, next) => {
    const comment = new Comment(req.body);
    const threadId = req.params.thread;
    console.log(comment);
    console.log(threadId);

    Thread.findOneAndUpdate({ id: threadId }, { $push: { comments: comment } }, (error, result) => {
        if (error) {
            next(error);
        } else {
            res.status(201).send(`${result} saved to thread!`);
        }
    });

});

router.put("/editComment/:threadId/:commentId", (req, res, next) => {
    const comment = new Comment(req.body);
    const threadId = req.params.threadId;
    const commentId = req.params.commentId;
    console.log(comment);

    Thread.findOneAndUpdate({ id: threadId },
        { $set: { "comments.$[element].text": "comment.text"} }, { arrayFilters: [{ "element._id": {threadId} }] }, (error, result) => {
            if (error) {
                next(error);
            } else {
                res.status(201).send(`${result} saved as an edit!`);
            }
        }
    )
});

module.exports = router;
