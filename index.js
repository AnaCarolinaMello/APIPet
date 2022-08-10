
const indexRoute = require('./routes/route');
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const port =  3000;
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const controller = require("./controllers/dataController")


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('public'))

global.fileName = "fichas.json";


app.post('/index',async(req,res,next) =>{
    try{
        
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
        data.fichas.push(ficha)
        await fs.writeFileSync(global.fileName,JSON.stringify(data, null, 2))
        res.send(ficha)
        console.log(ficha)
    }catch(err){
        next(err)
    }
});

app.get("/getFicha",async(req,res)=>{
    const data = JSON.parse(await fs.readFileSync(global.fileName));
    res.send(data.fichas)
})

app.get("/:id",async(req,res,next)=>{
    try{
        const data = JSON.parse(await fs.readFileSync(global.fileName))
        console.log(data)
        const ficha = data.fichas.find(
            ficha => ficha.id === parseInt(req.params.id)

        );
        res.send(ficha)
        console.log("Buscar pet pelo id")
    }catch(err){
        next(err)
    }
})

app.delete("/:id", async (req,res,next) =>{
    try{
        const data = JSON.parse(await fs.readFileSync(global.fileName))
        data.fichas = data.fichas.filter(
            fichas => fichas.id !== parseInt(req.params.id)
        );
        await fs.writeFileSync(global.fileName, JSON.stringify(data, null, 2));        
        res.end();
        console.log("Pet deletado")
    }catch(err){
        next(err)
    }
})

app.get('/', controller.getGatos);

app.get('/', controller.getCao);

app.listen(port, err =>{
    console.log(`http://localhost:${port}`)
})
