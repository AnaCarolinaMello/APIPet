const data = require('../models/dataModels')
const dataCao = require('../models/dataFichas')
const ax = require('axios')

exports.getGatos = async (req,res) =>{

     var gato= await data.returnGatos()
     res.render('index',{gato: gato,cao:null})
}

exports.getCao = async (req,res) =>{

    var cao= await data.returnCao()
    res.render('index',{cao: cao,gato:null})
    console.log(cao)
}
