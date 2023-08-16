### 🚀 Instalar e rodar o Backend

Vá para a pasta Benckend:

```
cd backend
```

Instale as dependências contidas nos arquivos `package.json`.

```
npm install
# ou
$ yarn
```

Renomeie o arquivo <kbd>.env_exemple</kbd> para <kbd>.env</kbd> e configure as variáveis de ambiente para conexão com o banco de dados.

Rodar o servidor com o Nodemon. Caso faça alguma alteração na estrutura de arquivos ou pastas que possa afetar a execução, verifique no `package.json` os scripts.

```
npm run server
# ou
yarn server
```

Criar tabelas com migrate

```
npx sequelize-cli migration:generate --name nome_da_migration

npx sequelize-cli db:migrate
```

Reverter a última migração aplicada ao banco de dados

```
npx sequelize-cli db:migrate:undo
```

---