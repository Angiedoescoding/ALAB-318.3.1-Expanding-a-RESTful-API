// GET /comments
        // Note that we do not have any comments data yet; that is okay! Make sure that you create a place to store comments, but you do not need to populate that data.
// POST /comments
        // When creating a new comment object, it should have the following fields:
            // id: a unique identifier.
            // userId: the id of the user that created the comment.
            // postId: the id of the post the comment was made on.
            // body: the text of the comment.

const express = require("express");
const router = express.Router();

let comment = [];       // creating a placehlder for future comments sin we don't have any currently

router.post("/", (req, res, next) => {
    const { userId, postId, body } = req.body;
    const newComment = {                // how the new comment object will look like and should consist of
        id: customElements.length + 1,
        userId,
        postId,
        body
    };
    comments.push(newComment);      // adding a new comment to the array (list of comments);
    res.json(newComment)
});

// /comments/:id  -- Retrieves the comment with the specified id;  update a comment with the specified id with a new body; delete a comment with the specified id. -- GET, PATCH, DELETE

router
    .route("/:id")
    .get((req, res, next) => {
        const comment = comments.filter(comment => comment.id == req.params.id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ message: "No comment found from this user." });
        }
    })

    .patch((req, res, next) => {
        const { body } = req.body;
        const comment = comments.find(comment => comment.id == req.params.id);
        if (comment) {
            comment.body = body;
            res.json(comment);
        } else {
            res.status(404).json({ message: "No comment found." })
        }
    })


    .delete((req, res, next) => {
        const index = comments.findIndex(comment => comment.id == res.params.id);
        if (index != -1) {
            comments.splice(index, 1);
            res.json({ message: "The comment has been deleted." });
        } esle {
            res.status(404).json({ message: "No comment found."});
        }
    });

module.exports = router;