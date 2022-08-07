const express = require('express');
const app = express()
const bodyParser = require('body-parser')
// const expressLayouts = require('express-ejs-layouts')
const port =  3000;
// const exp = require('constants');
const path = require('path')
// const axios = require("axios")
const controller = require("./controllers/dataController")
const indexRoute = require('./routes/route');

app.set('view engine', 'ejs');
// app.use(expressLayouts) 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static('public'))  


app.set('views', path.join(__dirname, 'views'))

// app.get('/',controller.getFichas);

// app.post()

// app.post('/ficha', (req, res) => {
    // let nome = req.body.nomeDoAnimal;
    // let idade = req.body.idadeDoAnimal;
    // let peso = req.body.pesoDoAnimal;
    // let porte = req.body.porteDoAnimal;
    // let raca = req.body.racaDoAnimal;
//     res.get('ficha',nome);
// });

app.post('/index', (req,res) =>{
    const nome = req.body.nomeDoAnimal;
    const idade = req.body.idadeDoAnimal;
    const peso = req.body.pesoDoAnimal;
    const porte = req.body.porteDoAnimal;
    const raca = req.body.racaDoAnimal;
    // const ficha = [nome,idade,peso,porte,raca]
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="../public/style/style.css" type="text/css">
    </head>
    <body>
        <main>
            <label><% ${nome}%></label>     
        </main>
    </body>
    </html>`)
})

app.get('/', controller.getGatos);

app.get('/', controller.getCao);

app.listen(port, err =>{
    console.log(`http://localhost:${port}`)
})
