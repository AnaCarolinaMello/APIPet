const data = require('../models/dataModels')
const dataFicha = require('../models/dataFichas')
const ax = require('axios')
const fs = require("fs")
global.fileName = "teste.json";

exports.getGatos = async (req,res) =>{

     var gato= await data.returnGatos()
     res.render('index',{gato: gato,cao:null})
}

exports.getCao = async (req,res) =>{

    var cao= await data.returnCao()
    res.render('index',{cao: cao,gato:null})
    console.log(cao)
}

// exports.getFichas = async
// exports.getFichas = async (req,res) =>{

//     var ficha = fs.readFile('./models.dataFichas.js')
//     res.render('ficha',{ficha:ficha})
// }