const express = require("express")
const router = express.Router()
const Customer = require("../models/Customer")
const customerController = require("../controllers/customer.controller")


router
	.get("/",customerController.findAllCustomer)
	.post("/", customerController.createCustomer)
	.get("/:customer_id", customerController.findOneCustomer)
	.put("/:customer_id", customerController.updateCustomerInfo)
	.delete("/:customer_id", customerController.removeCustomer)

module.exports = router