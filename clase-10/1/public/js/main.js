const socket = io.connect();

socket.on("saludo", (data) => {
  console.log(data);
});
