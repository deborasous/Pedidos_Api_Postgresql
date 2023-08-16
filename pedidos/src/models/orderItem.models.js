const { INTEGER, FLOAT, DATE } = require('sequelize');
const { connection } = require('../database/connection');

const OrderItem = connection.define(
  'orderItem',
  {
    orderId: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'orders',
        },
        key: 'id',
      },
    },
    productId: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'products',
        },
        key: 'id',
      },
    },
    itemQuantity: INTEGER,
    unitPrice: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports={OrderItem}