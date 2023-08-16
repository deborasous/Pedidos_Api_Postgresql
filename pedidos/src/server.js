const express = require('express');
const cors = require('cors');
const { connection } = require('./database/connection');
const routes = require('./routes/index');

class Server {
  constructor(server = express()) {
    this.database();
    this.middlewares(server);
    // this.allRoutes(server);
    this.iniciallizeServer(server);
  }

  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log('Conexão estabelecida com sucesso!');
    } catch (error) {
      console.error(
        'Não foi possível estabelecer conexão com o servidor.',
        error
      );
      throw error;
    }
  }

  async iniciallizeServer(app) {
    const port = 3333;
    app.listen(port, () => console.log(`Servidor executado na porta ${port}`));
  }

  // async allRoutes(app) {
  //   app.use(routes);
  // }
}

module.exports = { Server };
