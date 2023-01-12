// Import models
const Customer = require("../models/Customer")

// Find all
async function queryAllCustomer() {
    const customers = await Customer.find({'is_deleted' : false})
    return customers
}
// Find one
async function queryOneCustomer(customer_id){
    const customer = await Customer.findById(customer_id)
	return customer
}

// Create
async function saveCustomer(body) {
    const email_exist = await Customer.findOne({"email" : body.email }).exec()
    if(email_exist == null){
        const customer = await Customer.create(body)
        return customer
    }else{
        return {"message" : "email already exist"}
    }
}

// Update
async function updateCustomer(customer_id, body) {
    const customer = await Customer.findByIdAndUpdate(customer_id, {"$set" : body})
	return customer
}
// Delete
async function deleteCustomer(customer_id){
    const customer = await Customer.findByIdAndUpdate(customer_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "customer deleted", "customer_name" : customer.name }
}
//module.exports.saveCustomer = saveCustomer
module.exports = {
    saveCustomer,
    queryAllCustomer,
    queryOneCustomer,
    updateCustomer,
    deleteCustomer
}
