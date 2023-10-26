const express = require('express');
const router = express.Router();

const FilmMongo = require('../models/film_model');

router.get('/', async (req, res) => {
    
    try {
        const Films = await FilmMongo.find();
        console.log(Films);
        res.send(Films)
    } catch (err) {
        res.send({message:err})
    }
    
})

router.get('/:filmID', async (req, res) => {
    try {
        console.log(req.params.filmID)
        const filmByID = await FilmMongo.findById('req.params.filmID');
        res.send(filmByID)
    } catch (err) {
        res.send({message:err})
    }
})

module.exports = router;