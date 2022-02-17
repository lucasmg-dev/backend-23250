const knex = require("./db");

const cars = [
  {
    name: "Audi",
    price: 500,
  },
  {
    name: "BMW",
    price: 400,
  },
  {
    name: "Mercedes Benz",
    price: 300,
  },
];

knex("cars")
  .insert(cars)
  .then((data) => {
    console.log(data);
    console.log("Creo el campo peugeout 405");
  })
  .catch((err) => {
    console.log(err.sqlMessage);
    console.log(err.sql);
  })
  .finally(() => {
    knex.destroy();
  });
