// Import models
const Trash = require("../models/Trash")

// Create
async function saveTrash(body) {
    console.log(body)
    const booking = await Trash.create(body)
    return booking
}
async function getCounts() {
    const biodegradable = await Trash.count({"category" : "biodegradable"})
    const non_biodegradable = await Trash.count({"category" : "non_biodegradable"})
    const recyclable = await Trash.count({"category" : "recyclable"})
    const total = biodegradable + non_biodegradable + recyclable
    body = {
        "biodegradable" : biodegradable,
        "non_biodegradable" :non_biodegradable,
        "recyclable" : recyclable,
        "total" : total
    }
    return booking
}
module.exports = {
    saveTrash,
    getCounts
}
