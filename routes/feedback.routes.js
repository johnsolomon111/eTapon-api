const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
	res.send("Feedback List")
})

module.exports = router