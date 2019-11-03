'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
});

const app = require('express')();
const consign = require('consign');
const PORT = process.env.PORT || 4000;

consign()
  .then('/src/config/middlewares.js')
  .then('/src/api/controllers')
  .then('/src/config/routes.js')
  .into(app)

app.listen(PORT, (err) => (err) ? console.log(err) : console.log(`Rodando em: http://localhost:${PORT}`));