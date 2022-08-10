
const express = require('express') 
const router = express.Router();
const bodyParser = require('body-parser')
const dataController = require("../controllers/dataController");
const fs = require('fs')
global.fileName = "fichas.json";

router.get('route.js', (req, res, next)=>{
    const gatos = dataController.getGatos()
    const caes= dataController.getCao()
    console.log(gatos)
    console.log(fichas)
    res.render('route',{
        cao: caes,
        gato:gatos
    });
});


module.exports = router;