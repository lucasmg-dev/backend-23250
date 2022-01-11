const express = require("express")
const {response} = require("express");

const app = express()

const frase = "Hola mundo como estan"

app.get("/api/frase", (req, res) => {
  res.send({
    frase
  })
})

app.get("/api/letras/:num", (req, res) => {
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

app.get("/api/palabras/:num", (req, res) => {
  const num = parseInt(req.params.num)
  const arrFrase = frase.split(" ")
  if(isNaN(num)) return res.send({
    error: "El parámetro no es un numero"
  })
  if (num < 1 || num > arrFrase.length) {
    return res.send({
      error: "El parámetro esta fuera de rango"
    })
  }
  res.send(arrFrase[num-1])
})

app.get("/visitas", (req, res) => {
  counter++
  res.send(`La cantidad de visitas es ${counter}`)
})

app.get("/fyh", (req, res) => {
  const date = new Date()
  res.send({
    fyh: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  })
})

const server = app.listen(3000, () => {
  console.log(`Started server: http://localhost:${server.address().port}`)
})