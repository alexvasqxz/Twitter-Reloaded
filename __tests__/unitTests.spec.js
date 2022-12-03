const express = require('express');
const router = express.Router();
const Post = require('../schemas/PostSchema');

describe("Twitter Reloaded Unit Tests", () => {
    test("Post a tweet", () => {

        const tweet = router.post("/", async (req, res, next) => {
            if (!req.body.content) {
                console.log("Content param not sent with request");
                return res.sendStatus(400);
            }
        
            var postData = {
                content: req.body.content,
                postedBy: req.session.user
            }
        
            if(req.body.replyTo) {
                postData.replyTo = req.body.replyTo;
            }
        
            Post.create(postData)
            .then(async newPost => {
                newPost = await User.populate(newPost, { path: "postedBy" })
        
                res.status(201).send(newPost);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(400);
            })
        })

        expect(tweet).toBeTruthy();

    });

    test("Get a tweet", () => {

        const tweets = router.get("/", async (req, res, next) => {
            var results = await getPosts({});
            res.status(200).send(results);
        });

        expect(tweets).toBeTruthy();

    });

    test("Get tweet by ID", () => {
        const tweet = router.get("/:id", async (req, res, next) => {

            var postId = req.params.id;
        
            var postData = await getPosts({ _id: postId });
            postData = postData[0];
        
            var results = {
                postData: postData
            }
        
            if(postData.replyTo !== undefined) {
                results.replyTo = postData.replyTo;
            }
        
            results.replies = await getPosts( { replyTo: postId })
        
            res.status(200).send(results);
        })

        expect(tweet).toBeTruthy();

    });
});