'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    phoneMobile: DataTypes.STRING,
    email: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    typeAddress: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};