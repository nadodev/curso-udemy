const express = require('express');
const app = express();

//rotas 
app.get('/', (req, res) => {
    res.send('Hello Wordd')
})

//servidor
app.listen(3000, function() {
    console.log('servidor rodando na porta 3000');
})