
const axios = require('axios');
exports.returnCao = ()=>{
    return axios
    .get("https://random.dog/woof.json")
    .then(data=>{
        console.log(data)
        var requeste = data.data.url
        return requeste
    })
}