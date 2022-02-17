var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productosRouter = require("./routes/productos");

var app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  req.user = {
    name: "Lucas",
    is_admin: false,
  };
  next();
});

// app.use(function (req, res, next) {
//   req.io = io;
//   next();
// });

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/productos", productosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");
  // aca existe
});

// app.use(function (req, res, next) {
//   req.io = io;
//   next();
// });

app.io = io;
app.siteTitle = "Desafio X";

// error handler
app.use(function (err, req, res, next) {
  io;
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

httpServer.listen(8080);
