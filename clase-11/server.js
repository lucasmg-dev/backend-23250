const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const MENSAJES = [
  {
    author: "Admin",
    message: "Bienvenido al chat!",
  },
];

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado", socket.id);
  // agregar el nuevo mensaje enviado
  socket.on("new_message", (data) => {
    MENSAJES.push(data);
    io.sockets.emit("messages_received", MENSAJES);
  });
  io.sockets.emit("messages_received", MENSAJES);
});

httpServer.listen(3000, () => {
  console.log("Server HTTP con socketIO");
});
