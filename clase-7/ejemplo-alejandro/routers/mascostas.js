const express = require("express");
const router = express.Router();
const arrMascotas = [];
const mdw = require("../middleware/middleware.js");

router.get("/",(req, res)=>{
    res.status(200).send(JSON.stringify(arrMascotas));
});



router.use(mdw.chekAccesRaza).post("/",(req,res)=>{

    if(req.body.nombre !== undefined && req.body.raza !== undefined && req.body.edad !== undefined){
        let obj = req.body;
        arrMascotas.push(obj);
        res.status(200).send({status:"ok",datos:arrMascotas});
    }
    else{
        res.status(404).send({error:"No se recibio alguno de los parametros para la carga de elementos"});
    }
});




module.exports = router;