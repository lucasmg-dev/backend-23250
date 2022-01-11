const express = require("express");
const router = express.Router();
const arrPersonas = [];
const mdw = require("../middleware/middleware.js");


router.use((req, res, next) => {
    return res.send("SERVIDOR EN MANTENIMIENTO")
})

router.get("/",(req, res)=>{
    res.status(200).send(JSON.stringify(arrPersonas));
});

router.post("/",(req,res)=>{

    if(req.body.nombre !== undefined && req.body.apellido !== undefined && req.body.edad !== undefined){
        let obj = req.body;
        arrPersonas.push(obj);
        res.status(200).send({status:"ok",datos: arrPersonas});
    }
    else{
        res.status(404).send({error:"No se recibio alguno de los parametros para la carga de elementos"});
    }

});




module.exports = router;