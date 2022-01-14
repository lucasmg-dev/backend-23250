import express from "express";
import router_archivos from "./routes/archivos.js";
import router_personas from "./routes/personas.js";

const app = express();

app.use(express.json());

const router_mascotas = express.Router();
router_mascotas.get("/", (req, res) => {
  res.send("Hola desde mascotas");
});

app.use("/personas", router_personas);
app.use("/mascotas", router_mascotas);
app.use("/archivos", router_archivos);

app.listen(3000);
