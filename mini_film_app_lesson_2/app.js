// Import Libs
const express = require('express');
const fs = require('fs');
const app = express();


// Connect to MongoDB database
const mongoose = require('mongoose');
try{
    const MURL = fs.readFileSync('MongoURL.txt', 'utf8'); // mongo atlas database connection URL
    mongoose.connect(MURL);
    // console.log(MURL);
} catch(err) {
    console.error("\nYou need to save your MongoURL in a file called MongoURL.txt\n")
}


// App routing and initialzation
const filmsRoute = require('./routes/films');
app.use('/films', filmsRoute);

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.listen(3000, () => {
    console.log('Your server is running');
})