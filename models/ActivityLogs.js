const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types

const logsSchema = new mongoose.Schema({
    performedBy: SchemaTypes.ObjectId,
    operationType: String,
    performedObject: Object

},
{
    timestamps: true
})


module.exports = mongoose.model("Logs", logsSchema)
/*

*/