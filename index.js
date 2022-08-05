const express = require('express');
const app = express()
const port =  3000;
// const exp = require('constants');
const path = require('path')
// const axios = require("axios")
const controller = require("./controllers/dataController")
const indexRoute = require('./routes/route');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static('public'))



app.set('views', path.join(__dirname, 'views'))



app.get('/', controller.getGatos);

app.get('/', controller.getCao);

app.listen(port, err =>{
    console.log(`http://localhost:${port}`)
})
