'use strict';

module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).json({ hello: "World" })
  });

  app.post('/signin', app.src.api.controllers.oAuthController.signin)
  app.post('/validateToken', app.src.api.controllers.oAuthController.validateToken);

  app.route('/users')
    .post(app.src.api.controllers.userController.create)

  app.route('/customers')
    .post(app.src.api.controllers.customerController.create)
}