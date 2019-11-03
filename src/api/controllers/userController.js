'use strict';

const { User } = require('../models');

module.exports = (app) => {
  const create = async (req, res) => {
    try {
      const userBody = { ...req.body };

      const user = await User.create(userBody);

      res.status(200).json(user);
    } catch(err) {
      res.status(500).json(err);
    }
  }

  return { create }
}