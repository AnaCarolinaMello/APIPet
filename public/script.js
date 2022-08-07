
// import {promises as fs} from "fs"; 
var fs = require("fs")
var btnSubmit = document.querySelector("#Submit");
btnSubmit.addEventListener('click',enviarDadosFicha)

 async function enviarDadosFicha(){
    let nome = document.querySelector("#nomeDoAnimal");
    let idade = document.querySelector("#idadeDoAnimal");
    let peso = document.querySelector("#pesoDoAnimal");
    let porte = document.querySelector("#porteDoAnimal");
    let descricao = document.querySelector("#descricaoDoAnimal");
    let raca = document.querySelector("#racaDoAnimal");
    let ficha = [{
        nome: nome,
        idade: idade,
        peso: peso,
        porte: porte,
        raca: raca,
        descricao: descricao
    }]
    await fs.writeFile("./models/dataFichas.js",ficha);
    console.log(fichas)
}