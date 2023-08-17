const { DATE, STRING } = require('sequelize');
const { connection } = require('../database/connection');

const Invoice = connection.define(
  'invoice',
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
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id',
      },
    },
    sallerName: STRING,
    sallerCnpj: {
      type: STRING,
      validate: {
        len: {
          args: [14, 14],
          msg: 'CNPJ deve conter 14 números.',
        },
      },
    },
    issueDateTime: DATE,
    itemDetails: STRING,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = {
  Invoice,
};
