const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

// engine(extesion, callback)
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("views", "./views"); // specify the views directory
app.set("view engine", "hbs"); // register the template engine

app.get("/", function (req, res) {
  // render(archivo de plantilla, {})
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/test", function (req, res) {
  // render(archivo de plantilla, {})
  res.render("test", { numeros: [5, 8, 2, 3] });
});

app.listen(3000);
