
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const port =  3000;
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const controller = require("./controllers/dataController")
// const indexRoute = require('./routes/route');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static('public'))

global.fileName = "fichas.json";
// const { readFile, writeFile} = fs;
//var id = 1;

// app.get('/',controller.getFichas);

// app.post()

// app.post('/index', (req,res) =>{
//     const nome = req.body.nomeDoAnimal;
//     const idade = req.body.idadeDoAnimal;
//     const peso = req.body.pesoDoAnimal;
//     const porte = req.body.porteDoAnimal;
//     const raca = req.body.racaDoAnimal;
//     // const ficha = [nome,idade,peso,porte,raca]
    // res.send(`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    //     <link rel="stylesheet" href="../public/style/style.css" type="text/css">
    // </head>
    // <body>
    //     <main>
    //         <label>${nome}</label>     
    //     </main>
    // </body>
    // </html>`)
// })

app.post('/index',async(req,res,next) =>{
    try{
        //id++
        const nome = req.body.nomeDoAnimal;
        const idade = req.body.idadeDoAnimal;
        const peso = req.body.pesoDoAnimal;
        const porte = req.body.porteDoAnimal;
        const raca = req.body.racaDoAnimal;
        const data = JSON.parse(await fs.readFileSync(global.fileName));

        const ficha = {
            id: data.nextId++,
            nome: nome,
            idade: idade,
            peso: peso,  
            porte: porte,
            raca: raca
        }
        // console.log(id)
        data.fichas.push(ficha)
        await fs.writeFileSync(global.fileName,JSON.stringify(data, null, 2))
        res.send(ficha)
        console.log(ficha)
        // res.send(`<!DOCTYPE html>
        //             <html lang="en">
        //                 <head>
        //                     <meta charset="UTF-8">
        //                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //                     <title>Document</title>
        //                     <link rel="stylesheet" href="../public/style/style.css" type="text/css">
        //                 </head>
        //                 <body>
        //                     <main>
        //                         <label>${nome}</label>     
        //                     </main>
        //                 </body>
        //             </html>`)
    }catch(err){
        next(err)
    }
});



// app.post('/models/dataFicha', function(req, res) {
    
// });

app.get('/', controller.getGatos);

app.get('/', controller.getCao);

app.get('/', controller.getFichas);

app.listen(port, err =>{
    console.log(`http://localhost:${port}`)
})
