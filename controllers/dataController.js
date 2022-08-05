const data = require('../models/dataModels')
const dataCao = require('../models/dataCao')
const ax = require('axios')

exports.getGatos = async (req,res) =>{

     var gato= await data.returnGatos()
     res.render('index',{gato: gato,cao:null})
}

exports.getCao = async (req,res) =>{

    var cao= await dataCao.returnCao()
    res.render('index',{cao: cao,gato:null})
    console.log(cao)
}



