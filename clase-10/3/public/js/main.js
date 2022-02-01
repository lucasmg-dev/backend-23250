const socket = io.connect();

const input = document.querySelector("input");
document.querySelector("button").addEventListener("click", () => {
  socket.emit("mensaje", input.value);
});

socket.on("mensajes", (msjs) => {
  let mensajesHTML = "";
  msjs.forEach((element) => {
    mensajesHTML += `<tr><td>${element.socketid}</td><td>${element.mensaje}</td></tr>`;
  });
  document.querySelector("tbody").innerHTML = mensajesHTML;
});
