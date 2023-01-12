const mongoose = require("mongoose")

const collectorSchema = new mongoose.Schema({
    fullname : {
            type : String,
            required : true
        },
    phone_number : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    password :{
        type : String,
        required : true
    },
    is_deleted : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Collector", collectorSchema)
