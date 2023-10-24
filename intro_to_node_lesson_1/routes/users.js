const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("You are in users")
})


router.get("/suru_de", (req, res) => {
    res.send(`Hello suru_de! Welcome to the club}`)
})

module.exports = router