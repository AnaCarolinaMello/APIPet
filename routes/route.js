const express = require('express') 
const router = express.Router();
const bodyParser = require('body-parser')
const dataController = require("../controllers/dataController");
// const data = require('../models/dataModels');
app.use(express.json());
const fs = require('fs')
app.use(bodyParser.json());
global.fileName = "teste.json";
const { readFile, writeFile} = fs;
var id = 1;
// const gato = require("../models/dataModels")

router.get('route.js', (req, res, next)=>{
    const gatos = dataController.getGatos()
    const caes= dataController.getCao()
    //const fichas = dataController.getFichas()
    console.log(gatos)
    console.log(fichas)
    res.render('route',{
        cao: caes,
        gato:gatos
        //ficha: fichas
    });
});

// router.get("/:id", async (req,res,next) =>{
//     try{
//         const data = JSON.parse(await fs.readFileSync(global.fileName))
//         const ficha = data.fichas.find(
//             ficha => ficha.id === parseInt(req.params.id)
//         );
//         console.log("Buscar pet pelo id")
//     }catch(err){
//         next(err)
//     }
// })

// router.delete("/:id", async (req,res,next) =>{
//     try{
//         const data = JSON.parse(await fs.readFileSync(global.fileName))
//         data.fichas = data.fichas.filter(
//             fichas => fichas.id !== parseInt(req.params.id)
//         );
//         await fs.writeFileSync(global.fileName, JSON.stringify(data, null, 2));        
//         res.end();
//         console.log("Pet deletado")
//     }catch(err){
//         next(err)
//     }
// })


// router.post('/',async(req,res,next) =>{
// console.log("teste")
//     try{
//         id++
//         const nome = req.body.nomeDoAnimal;
//         const idade = req.body.idadeDoAnimal;
//         const peso = req.body.pesoDoAnimal;
//         const porte = req.body.porteDoAnimal;
//         const raca = req.body.racaDoAnimal;
//         const data = JSON.parse(await readFile(global.fileName));
//         res.send(data)
//         const ficha = {
//             id: id,
//             nome: nome,
//             idade: idade,
//             peso: peso,
//             porte: porte,
//             raca: raca
//         }
//         data.fichas.push(ficha)
//         await writeFile(global.fileName,JSON.stringify(data, null, 2))
//         res.send(ficha)
//         console.log(ficha)
//     }catch(err){
//         next(err)
//     }
// });

// router.get('/ficha', function(req, res) {
//     res.render('path/to/ejs/files/ficha');
//   });

module.exports = router;