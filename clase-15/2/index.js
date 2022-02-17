const knex = require("./db");

const ARTICULOS = [
  {
    nombre: "Remera",
    codigo: "abc123",
    precio: 100,
    stock: 10,
  },
  {
    nombre: "Gorro",
    codigo: "def123",
    precio: 200,
    stock: 20,
  },
  {
    nombre: "Pantalon",
    codigo: "ghi123",
    precio: 300,
    stock: 30,
  },
  {
    nombre: "Zapato",
    codigo: "jkl123",
    precio: 400,
    stock: 40,
  },
  {
    nombre: "Medias",
    codigo: "mno123",
    precio: 500,
    stock: 50,
  },
];

knex.schema.dropTableIfExists("articulos").then(() => {
  knex.schema
    .createTable("articulos", (table) => {
      table.increments("id").primary().notNullable();
      table.string("nombre", 15).notNullable();
      table.string("codigo", 10).notNullable();
      table.float("precio");
      table.integer("stock");
    })
    .then((data) => {
      console.log("Creada la tabla articulos");
      return knex("articulos").insert(ARTICULOS);
    })
    .then(() => {
      console.log("Registros creados");
      return knex("articulos");
    })
    .then((rows) => {
      console.log(rows);
      return knex("articulos").where("id", 2).update("stock", 0);
    })
    .then(() => {
      console.log("Registro actualizado");
      return knex("articulos");
    })
    .then((rows) => {
      console.log(rows);
    })
    .catch((err) => {
      console.log(err.sqlMessage);
      console.log(err.sql);
    })
    .finally(() => {
      knex.destroy();
    });
});
