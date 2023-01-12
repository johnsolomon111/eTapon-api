const express = require("express")
const router = express.Router()
const collectorController = require("../controllers/collector.controller")


router
	.get("/",collectorController.findAllCollector)
	.post("/", collectorController.createCollector)
	.get("/:collector_id", collectorController.findOneCollector)
	.put("/:collector_id", collectorController.updateCollectorInfo)
	.delete("/:collector_id", collectorController.removeCollector)

module.exports = router