'use strict';

const { Customer } = require('../models');

module.exports = (app) => {
 const create = async (req, res, next) => {
    const customerBody = req.body;

    try {
      
      const customer = await Customer.create(customerBody);

      res.status(200).json(customer);

    } catch(err) {
      res.status(500).json(err)
    }
 } 

 const update = async (req, res, next) => {} 
 
 const drop = async (req, res, next) => {} 
 
 const get = async (req, res, next) => {}
 
 return { create, update, drop, get }
}