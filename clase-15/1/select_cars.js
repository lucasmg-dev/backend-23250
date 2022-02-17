const knex = require("./db");

// != <>
// select id, name, price from cars where price < 300;
knex("cars")
  .select("id", "name", "price")
  .where("price", ">", 300)
  .orderBy("price", "desc")
  .then((rows) => {
    for (row of rows) {
      console.log(`Name: ${row.name}, Price: ${row.price}`);
    }
  })
  .catch((err) => {
    console.log(err.sqlMessage);
    console.log(err.sql);
  })
  .finally(() => {
    knex.destroy();
  });
