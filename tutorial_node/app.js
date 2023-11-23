const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const info = [
    { name: 'leticia' },
    { name: 'marcos' },
    { name: 'leane' },
    { name: 'juan' },
];

app.get('', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/dados', (req, res) => {
    res.send(info);
});

app.post('/dados',(req, res) => {
    const newName = req.body.name;

    if (newName) {
        info.push({ name: newName });
        res.send(info);
        console.log(info);
    } else {
        res.status(404).send('Nome inválido. Por favor, forneça um nome válido.');
    }
});

app.listen(port, () => console.log(`listening on port ${port}!`));
