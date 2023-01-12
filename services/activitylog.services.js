const Logs = require('../models/ActivityLogs')


async function logging (model){
    // Catch saving activities
    model.post('save', async doc => {
        body = {
            performedBy: doc._id,
            operationType: "save",
            performedObject: doc
        }
        const logs = await Logs.create(body)
        console.log(logs)
    })
}

module.exports.logging = logging

