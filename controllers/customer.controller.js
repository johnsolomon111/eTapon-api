const customerService = require("../services/customer.services")
const httpStatus = require('http-status');
const Customer = require("../models/Customer");

const findAllCustomer = async (req, res) => {
    const customers = await customerService.queryAllCustomer()
    res.send(customers)
}

const findOneCustomer = async (req, res) => {
    const customer = await customerService.queryOneCustomer(req.params.customer_id)
    res.send(customer)
}
const createCustomer = async (req, res) => {
    const customer = await customerService.saveCustomer(req.body)
    res.status(httpStatus.CREATED).send(customer)
}

const updateCustomerInfo = async (req, res) => {
    const customer = await customerService.updateCustomer(req.params.customer_id, req.body)
    res.send(customer)
}

const removeCustomer = async (req, res) => {
    const customer = await customerService.deleteCustomer(req.params.customer_id)
    res.send(customer)
}

module.exports = {
    createCustomer,
    findAllCustomer,
    findOneCustomer,
    removeCustomer,
    updateCustomerInfo,
    
}