//Twój kod
const express = require('express');
const app = express();
let yes = 0,
    no = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:answer', (req, res) => {
    const answer = req.params.answer;
    if (answer === 'yes') {
        yes++;
    } else if (answer === 'no') {
        no++;
    }
    res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
    res.send(`Głosy za: ${yes}, przeciwko: ${no}`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
