const chekAccesAdmin = (req, res, next) => {
  if (req.body.nombre === "Alejandro") {
      req.body.saludo = "Bienvenido Admin";
      next();
  }else{
    res.status(404).send("Usted no es admin");
  }
}

const chekAccesRaza = (req, res, next) => {
  if (req.body.raza === "Dogo Argentino") {
      req.body.saludo = "Hola Perrito";
      next();
  }else{
    res.status(404).send("Usted no posee acceso");
  }
}

module.exports = {chekAccesAdmin, chekAccesRaza};
