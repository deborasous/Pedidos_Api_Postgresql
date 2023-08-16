const { DATE, STRING, FLOAT, INTEGER } = require('sequelize');
const { connection } = require('../database/connection');

const Order = connection.define(
  'orders',
  {
    userId: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id',
      },
    },
    dateHour: DATE,
    orderStatus: STRING,
    totalOrder: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = { Order };
