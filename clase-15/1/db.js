const knex = require("knex");

const conex = knex({
  client: "mysql",
  connection: {
    host: "0.0.0.0",
    user: "root",
    password: "root",
    database: "autos",
  },
  pool: { min: 0, max: 7 },
});

module.exports = conex;
