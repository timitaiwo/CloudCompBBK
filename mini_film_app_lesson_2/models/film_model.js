const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    film_name:{
        type:String
    },
    film_type:{
        type:String
    },
    film_year:{
        type:Date
    },
    film_link:{
        type:String
    },
})

module.exports = mongoose.model('Films', FilmSchema);