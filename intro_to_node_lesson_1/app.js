// Import the libraries
const express = require('express')
const app = express()

const movieRoute = require('./routes/movies')
const userRoute = require('./routes/users')

// Middleware
app.use('/movies', movieRoute)
app.use("/users", userRoute)

// Create a route
app.get('/', (req, res) => {
    res.send("You are in your homepage!")
})

// app.get('/movies', (req, res) => {
//     res.send("You are in the movies page!")
// })

// Start the server
app.listen(3000, () => {
    console.log("server is running...")
})