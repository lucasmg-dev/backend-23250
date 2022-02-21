const knex = require("knex");

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

class Contenedor {
  constructor(knexOptions) {
    this.knex = knex(knexOptions);
  }

  isExistTable(nameTable) {
    return this.knex.schema.hasTable(nameTable);
  }

  createTable() {
    return this.knex.schema.createTable("articulos", (table) => {
      table.increments("id").primary().notNullable();
      table.string("nombre", 15).notNullable();
      table.string("codigo", 10).notNullable();
      table.float("precio");
      table.integer("stock");
    });
  }

  createarticles() {
    return this.knex("articulos").insert(ARTICULOS);
  }

  selectArticles() {
    return this.knex("articulos");
  }

  updateStockById(stock, id) {
    return this.knex("articulos").where("id", id).update("stock", stock);
  }

  destroy() {
    this.knex.destroy();
  }
}

module.exports = Contenedor;
