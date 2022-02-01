const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

const MENSAJES = [];

io.on("connection", (socket) => {
  socket.on("mensaje", (data) => {
    MENSAJES.push({
      socketid: socket.id,
      mensaje: data,
    });

    io.sockets.emit("mensajes", MENSAJES);
  });
});

httpServer.listen(3000, () => {
  console.log("Server HTTP con socketIO");
});
