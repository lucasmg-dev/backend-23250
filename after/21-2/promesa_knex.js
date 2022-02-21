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

class Contenedor {
  async getAll() {}
}

// != <>
const getAll = () => {
  return new Promise((res, rej) => {
    conex("cars")
      .select("id", "name", "price")
      .where("price", ">", 300)
      .orderBy("price", "desc")
      .then((rows) => {
        res(rows);
        // for (row of rows) {
        //   console.log(`Name: ${row.name}, Price: ${row.price}`);
        // }
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      })
      .finally(() => {
        conex.destroy();
      });
  });
};

console.log(getAll().then((rows) => console.log(rows)));
