const knex = require("knex")({
  client: "sqlite3",
  connection: { filename: "./mydb.sqlite" },
});

knex.schema
  .createTable("productos", (table) => {
    table.increments();
    table.string("name");
    table.float("price");
  })
  .then((data) => {
    console.log("Creada la tabla productos");
  })
  .catch((err) => {
    console.log(err.sqlMessage);
    console.log(err.sql);
  })
  .finally(() => {
    knex.destroy();
  });
