'use strict';

const jwt = require('jwt-simple');
const { User } = require('../models');

module.exports = (app) => {

  const authSecret = process.env.authSecret;

  const signin = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw 'É necessário informar usuário e senha';      

      const user = await User.findOne({ where: { email }});

      if (!user) throw 'E-mail não localizado';

      if (!user.checkPassword(password)) throw 'Password incorreto';

      const now = Math.floor(Date.now() /1000);

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        iat: now,
        exp: now + (60 * 60 * 24 * 3)
      }

      res.status(200).json({
        ...payload,
       token: jwt.encode(payload, authSecret)
      })

    } catch( err ) {
      res.status(500).json(err)
    }
  }

  const validateToken = async () => {
    const userData = req.body || null;
    
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);

        if(new Date(token.exp * 1000) > new Date()) {
          return res.status(200).send(true)
        }
      }
    } catch(err) {
      res.status(500).json(err)
    }
  }

  return { signin, validateToken }
}