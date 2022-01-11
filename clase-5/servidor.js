const http = require("http")

const server = http.createServer((request, response) => {
  const date = new Date()
  const hour = date.getHours()

  let saludo = ""
  if (hour >= 6 && hour <= 12) saludo = "Buenos dias"
  if (hour >= 13 && hour <= 19) saludo = "Buenos tardes"
  if (hour >= 20 || hour <= 5) saludo = "Buenos noches"
  response.end(saludo)
})

const connectedServer = server.listen(3000, () => {
  //console.log(connectedServer)
  //console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`)
})
