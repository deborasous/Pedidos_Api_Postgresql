const { connection } = require('../database/connection');
const { STRING, FLOAT, DATE } = require('sequelize');

const Product = connection.define(
  'products',
  {
    productName: STRING,
    productBrand: STRING,
    description: STRING,
    unitPrice: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = { Product };
