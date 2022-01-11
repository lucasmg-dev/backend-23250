const express = require("express");
const app = new express();
const PORT = 3000;

const personas = require("../routers/personas.js");
const mascotas = require("../routers/mascostas.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/mascotas",mascotas);
app.use("/personas",personas);

app.use(express.static("public"));


app.listen(PORT,()=>{console.log(`App escuchando en puerto ${PORT}`)});