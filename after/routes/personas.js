import { Router } from "express";
import { toLower, toUpper } from "../utils/string.js";

const router = Router();

// commonjs or modules (ES modules)

router.get("/", (req, res) => {
  res.send(toLower("Hola desde personas"));
});

router.post("/", (req, res) => {
  console.log(JSON.parse(req.body));
  res.send(req.body);
});

router.get("/:id", (req, res) => {
  res.send("Hola desde persona:" + req.params.id);
});

router.get("/otra", (req, res) => {
  res.send("Hola desde personas otra");
});

export default router;
