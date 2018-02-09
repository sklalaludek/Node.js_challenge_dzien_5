//Twój kod
const express = require('express');
const app = express();

app.get('/:num1/:num2',(req, res) => {
    res.send((Number(req.params.num1) + Number(req.params.num2)).toString());
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
