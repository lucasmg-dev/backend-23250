import { Superficie, Perimetro } from "./operaciones";

import express from "express";

const app = express();

// http://localhost:3000/perimetro?figure=square&param1=5

// http://localhost:3000/perimetro?figure=rectangle&param1=5&param2=4

app.get("/perimetro", (req, res) => {
  const { figure, param1, param2 } = req.query; // url?a=1&b=2
  const response = {
    calculo: "Perimetro",
    figura: figure,
    param1,
    param2,
    result: NaN,
  };
  if (figure === "square") {
    response.result = Perimetro.square(Number(param1));
  }
  if (figure === "rectangle") {
    response.result = Perimetro.rectangle(Number(param1), Number(param2));
  }
  if (figure === "circle") {
    response.result = Perimetro.circle(Number(param1));
  }
  res.json(response);
});

app.get("/superficie", (req, res) => {
  const { figure, param1, param2 } = req.query; // url?a=1&b=2
  const response = {
    calculo: "Superficie x",
    figura: figure,
    param1,
    param2,
    result: NaN,
  };
  if (figure === "square") {
    response.result = Superficie.square(Number(param1));
  }
  if (figure === "rectangle") {
    response.result = Superficie.rectangle(Number(param1), Number(param2));
  }
  if (figure === "circle") {
    response.result = Superficie.circle(Number(param1));
  }
  res.json(response);
});

app.use((req, res) => {
  res.send(`404 Not Found`);
});

app.listen(3000);
