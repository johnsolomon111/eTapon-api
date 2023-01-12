const express = require("express")
const router = express.Router()
const bookingController = require("../controllers/booking.controller")


router
	.get("/",bookingController.findAllBookings)
	.post("/", bookingController.createBooking)
	.get("/:customer_id", bookingController.findOneBooking)
	.put("/:customer_id", bookingController.updateBookingInfo)
	.delete("/:customer_id", bookingController.removeBooking)

module.exports = router