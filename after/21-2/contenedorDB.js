const knex = require("knex");
const { Body } = require("node-fetch");

class ContenedorDB {
  constructor(dbOptions, table) {
    this.conex = knex(dbOptions);
    this.table = table;
  }

  async getAll() {
    return new Promise((res, rej) => {
      this.conex(this.table)
        .then((rows) => {
          res(rows);
        })
        .catch((err) => {
          console.log(err.sqlMessage);
          console.log(err.sql);
        })
        .finally(() => {
          this.conex.destroy();
        });
    });
  }

  async save(object) {
    this.conex(this.table)
      .insert(object)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      });
  }
}

const contenedorMysql = new ContenedorDB(
  {
    client: "mysql",
    connection: {
      host: "0.0.0.0",
      user: "root",
      password: "root",
      database: "autos",
    },
    pool: { min: 0, max: 7 },
  },
  "cars"
);

const contenedorSqlite = new ContenedorDB(
  {
    client: "sqlite3",
    connection: { filename: "./mydb.sqlite" },
  },
  "productos"
);

// contenedorMysql.save({ name: "Renault 19", price: 10 });

contenedorMysql.getAll().then(console.log);

contenedorSqlite.getAll().then(console.log);
