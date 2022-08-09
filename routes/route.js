const express = require('express') 
const router = express.Router();
const bodyParser = require('body-parser')
const dataController = require("../controllers/dataController");
// const data = require('../models/dataModels');
app.use(express.json());
const fs = require('fs')
app.use(bodyParser.json());
global.fileName = "dataFichas.json";
const { readFile, writeFile} = fs;
var id = 1;
// const gato = require("../models/dataModels")

router.get('route.js', (req, res, next)=>{
    const gatos = dataController.getGatos()
    const caes= dataController.getCao()
    const fichas = dataController.getFichas()
    console.log(gatos)
    res.render('route',{
        cao: caes,
        gato:gatos,
        ficha: fichas
    });
});


// router.get('/ficha', function(req, res) {
//     res.render('path/to/ejs/files/ficha');
//   });

module.exports = router;