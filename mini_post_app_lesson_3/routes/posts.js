const express = require("express");
const router = express.Router();


// POST method i.e create data
router.post('/', async (req, res) => {

    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url
    })

    try {
        const postToSave = await postData.save();
        res.send(postToSave);
    } catch(err) {
        res.send({message:err});
    }
})


// GET Method i.e read [all] data
router.get('/', async (req, res) => {
    try{
        const getPosts = await Post.find().limit(10);
        res.send(getPosts);
    } catch(err) {
        res.send({message:err});
    }
})


// GET Method i.e read [specific] data
router.get('/:postID', async (req, res) => {
    try{
        const getPostById = await Post.findById(req.params.postID);
        res.send(getPostById);
    } catch(err) {
        res.send({message:err});
    }
})


// PATCH Method i.e update specific data
router.patch('/:postID', async (req, res) =>{
    try{
        const updatePostByID = await Post.updateOne(
            {_id:req.params.postID},
            {$set:{
                user:req.body.user,
                title:req.body.title,
                text:req.body.text,
                hashtag:req.body.hashtag,
                location:req.body.location,
                url:req.body.url
            }}
    )} catch(err) {
        res.send({message:err})
    }
})



// DELETE Method i.e delete specific data
router.delete('/:postID', async (req, res) => {
    try{
        const deletePostByID = await Post.deleteOne({_id:req.params.postID});
        res.send(deletePostByID);
    } catch(err) {
        res.send({message:err});
    }
})

module.exports = router