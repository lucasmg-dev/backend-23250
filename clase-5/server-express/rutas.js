const express = require("express")

const app = express()

const router_frase = require('/rutas/frase.mjs')

const frase = "Hola mundo como estan"

app.use('/api/frase', router_frase)

const server = app.listen(3000, () => {
  console.log(`Started server: http://localhost:${server.address().port}`)
})

// rutas/frase.js
const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    frase
  })
})

router.get("/letras/:num", (req, res) => {
  const num = parseInt(req.params.num)
  if(isNaN(num)) return res.send({
    error: "El parámetro no es un numero"
  })
  if (num < 1 || num > frase.length) {
    return res.send({
      error: "El parámetro esta fuera de rango"
    })
  }
  res.send(frase[num-1])
})

module.exports = router