'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    hooks: {
      beforeSave: async user => {
        const salt = bcrypt.genSaltSync(10)
        
        if (user.password) {
          user.password_hash = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password_hash)
  }

  return User;
};