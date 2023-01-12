// Import models
const Booking = require("../models/Booking")

// Find all
async function queryAllBookings() {
    const bookings = await Booking.find({'is_deleted' : false})
    return bookings
}
// Find one
async function queryOneBooking(booking_id){
    const booking = await Booking.findById(booking_id)
	return booking
}

// Find all with customer ID
async function queryAllBookingByCustomerId(customer_id){
    const bookings = await Booking.find({"_id" : customer_id, "status" : "ongoing"})
	return bookings
}

// Create
async function saveBooking(body) {
    const booking = await Booking.create(body)
    return booking
   
}

// Update
async function updateBooking(booking_id, body) {
    const booking = await Booking.findByIdAndUpdate(booking_id, {"$set" : body})
	return booking
}

// Delete
async function deleteBooking(booking_id){
    await Booking.findByIdAndUpdate(booking_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "customer deleted"}
}
//module.exports.saveCustomer = saveCustomer
module.exports = {
    saveBooking,
    queryAllBookings,
    queryOneBooking,
    queryAllBookingByCustomerId,
    updateBooking,
    deleteBooking
}
