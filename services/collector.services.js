// Import models
const Collector = require("../models/Collector")

// Find all
async function queryAllCollector() {
    const collectors = await Collector.find({'is_deleted' : false})
    return collectors
}
// Find one
async function queryOneCollector(customer_id){
    const collector = await Collector.findById(customer_id)
	return collector
}

// Create
async function saveCollector(body) {
    const email_exist = await Collector.findOne({"email" : body.email }).exec()
    if(email_exist == null){
        const collector = await Collector.create(body)
        return collector
    }else{
        return {"message" : "email already exist"}
    }
}

// Update
async function updateCollector(collector_id, body) {
    const collector = await Collector.findByIdAndUpdate(collector_id, {"$set" : body})
	return collector
}
// Delete
async function deleteCollector(collector_id){
    const collector = await Collector.findByIdAndUpdate(collector_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "collector deleted", "collector_name" : collector.name }
}
//module.exports.saveCustomer = saveCustomer
module.exports = {
    saveCollector,
    queryAllCollector,
    queryOneCollector,
    updateCollector,
    deleteCollector
}
