const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '')));
const info = [
 
];

app.get('', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/dados', (req, res) => {
    res.send(info);
});

app.post('/dados',(req, res) => {
    const newLogin = req.body.email;
    const newPassword = req.body.senha;

    if (newLogin && newPassword) {
        info.push({ email: newLogin, senha: newPassword});
        res.send(info);
        console.log(info);
    } else {
        res.status(404).send('Email inválido. Por favor, forneça um email válido.');
    }
});

app.listen(port, () => console.log(`listening on port ${port}!`));
