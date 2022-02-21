const Contenedor = require("./db");

const config = {
  mysql: {
    client: "mysql",
    connection: {
      host: "0.0.0.0",
      user: "root",
      password: "root",
      database: "ecommerce",
    },
    pool: { min: 0, max: 7 },
  },
  sqlite: {
    client: "sqlite3",
    connection: { filename: "./mydb.sqlite" },
  },
};

const engineDb = process.argv[2] || "sqlite";

const contenedor = new Contenedor(config[engineDb]);

contenedor
  .isExistTable("articulos")
  .then((isExist) => (isExist ? true : contenedor.createTable()))
  .then(() => contenedor.createarticles())
  .then(() => contenedor.selectArticles())
  .then((rows) => {
    console.log(rows);
    return contenedor.updateStockById(99, 4);
  })
  .then(() => contenedor.selectArticles())
  .then(console.log)
  .finally(() => contenedor.destroy());
