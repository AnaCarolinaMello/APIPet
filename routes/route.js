const express = require('express') 
const router = express.Router();
const dataController = require("../controllers/dataController");
const data = require('../models/dataModels');
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