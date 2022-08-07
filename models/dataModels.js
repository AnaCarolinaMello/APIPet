
const axios = require('axios');

exports.returnGatos = ()=>{
    return axios
    .get("https://aws.random.cat/meow")
    .then(data=>{
        // var gatos = data
        var request = data.data.file
        return request
    })
}

exports.returnCao = ()=>{
    return axios
    .get("https://random.dog/woof.json")
    .then(data=>{
        console.log(data)
        var requeste = data.data.url
        return requeste
    })
}
