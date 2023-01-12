const mongoose = require("mongoose")
const Trash = require("./Trash")
const Customer = require("./Customer")
const trashService = require("../services/trash.services")
var SchemaTypes = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema({
    biodegradable: {
        type: Number,
        default : 0
    },
    non_biodegradale: {
        type: Number,
        default : 0
    },
    recyclable: {
        type: Number,
        default : 0
    },
    payment: {
        mode: String,
        amount: SchemaTypes.Decimal128
    },
    customer_id : {
        type: SchemaTypes.ObjectId,
        required : true
    },
    collector_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    status: String
}, 
{
    timestamps: true
})

bookingSchema.post('save', async doc => {
    customer = await Customer.findById(doc.customer_id)
    for (let i= 0; i < doc.biodegradable; i++) {
        body = {
            category: "biodegradable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            }
        }
        trashService.saveTrash(body)
    }
    for (let i= 0; i < doc.non_biodegradable; i++) {
        body = {
            category: "non_biodegradable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            }
        }
        trashService.saveTrash(body)
    }
    for (let i= 0; i < doc.recyclable; i++) {
        body = {
            category: "recyclable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            }
        }
        trashService.saveTrash(body)
    }
})

module.exports = mongoose.model("Booking", bookingSchema)
/*
bookings
	- trashes [
		{
			category_name: "bio/non-bio/recyc",
			no_of_bags: ""
		}
		]- req
	- time - req
	- payment 
		- mode - req 
		- amount - req 
*/