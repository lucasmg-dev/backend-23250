const knex = require("knex")({
  client: "sqlite3",
  connection: { filename: "./mydb.sqlite" },
});

const productos = [
  {
    name: "Remera",
    price: 500,
  },
  {
    name: "Pantalon",
    price: 400,
  },
  {
    name: "Gorro",
    price: 300,
  },
];

knex("productos")
  .insert(productos)
  .then((data) => {
    console.log(data);
    console.log("Creo los productos");
  })
  .catch((err) => {
    console.log(err.sqlMessage);
    console.log(err.sql);
  })
  .finally(() => {
    knex.destroy();
  });
