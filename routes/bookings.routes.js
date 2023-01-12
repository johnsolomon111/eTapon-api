const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
	res.send("Bookings List")
})

module.exports = router