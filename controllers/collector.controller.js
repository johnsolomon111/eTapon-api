const collectorService = require("../services/collector.services")
const httpStatus = require('http-status');

const findAllCollector = async (req, res) => {
    const collector = await collectorService.queryAllCollector()
    res.send(collector)
}

const findOneCollector = async (req, res) => {
    const collector = await collectorService.queryOneCollector(req.params.collector_id)
    res.send(collector)
}
const createCollector = async (req, res) => {
    const collector = await collectorService.saveCollector(req.body)
    res.status(httpStatus.CREATED).send(collector)
}

const updateCollectorInfo = async (req, res) => {
    const collector = await collectorService.updateCollector(req.params.collector_id, req.body)
    res.send(collector)
}

const removeCollector = async (req, res) => {
    const collector = await collectorService.deleteCollector(req.params.collector_id)
    res.send(collector)
}

module.exports = {
    createCollector,
    findAllCollector,
    findOneCollector,
    removeCollector,
    updateCollectorInfo,
    
}