const { connection } = require('../database/connection');
const { STRING, DATE } = require('sequelize');

const User = connection.define(
  'users',
  {
    name: STRING,
    surname: STRING,
    dateBirth: {
      type: STRING,
      validate: {
        isDate: true,
      },
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: 'CPF deve conter 11 números',
        },
      },
      unique: true,
    },
    cellPhone: STRING,
    address: STRING,
    email: {
      type: STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Insira um endereço de e-mail válido.',
        },
      },
      unique: true,
    },
    password: {
      type: STRING,
      validate: {
        len: {
          args: [8, 20],
          msg: 'Senha precisa ter mais de 8 caracteres',
        },
        is: {
          args: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,12}$/,
          msg: 'Senha deve conter: uma letra maúscula, uma letra minúscula, números e pelo menos um caracter especial.',
        },
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = { User };
