const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado", socket.id);
  socket.emit("saludo", `Hola ${socket.id}`);
  io.sockets.emit("saludo", "Hola a todos");
});

httpServer.listen(3000, () => {
  console.log("Server HTTP con socketIO");
});
