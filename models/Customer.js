const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
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
    address : {
        house : {
            type : String,
            required : true
        },
        purok : {
            type : String,
            required : true
        },
        barangay : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        }
    },
    is_deleted : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Customer", customerSchema)
/*
    - fullname - req
    - number - req
    - email - req
    - password - req
    - address
        - House No/Description - req
        - Street/Purok - req
        - Barangay - req
        - City - req
*/