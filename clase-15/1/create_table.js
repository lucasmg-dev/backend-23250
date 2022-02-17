const knex = require("./db");

knex.schema
  .createTable("cars", (table) => {
    table.increments();
    table.string("name");
    table.float("price");
  })
  .then((data) => {
    console.log("Creada la tabla cars");
  })
  .catch((err) => {
    console.log(err.sqlMessage);
    console.log(err.sql);
  })
  .finally(() => {
    knex.destroy();
  });
