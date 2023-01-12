// Express Imports for API 
const express = require('express')
const app = express()
app.use(express.json())


const { default: mongoose } = require('mongoose')


// Initialize DB
mongoose.connect("mongodb://127.0.0.1:27017/etapon_db")


// Import routes from files
const CustomerRouter = require('./routes/customer.routes')
const CollectorRouter = require('./routes/collectors.routes')
const BookingsRouter = require('./routes/bookings.routes')
const FeedbackRouter = require('./routes/feedback.routes')



app.use("/customers", CustomerRouter)
app.use("/collectors", CollectorRouter)
app.use("/bookings", BookingsRouter)
app.use("/feedback", FeedbackRouter)




app.listen(3000)