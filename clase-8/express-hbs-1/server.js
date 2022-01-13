const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.render("temaplte.html", { ... })
  res.sendFile("view/vista.html")
})

app.use(express.static("public"))

app.listen(3001)