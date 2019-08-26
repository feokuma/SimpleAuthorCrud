var express = require('express')
var dbAutores = require('./db/db');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

var actualId = 3;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/autores', cors(), (req, res) => {
    console.log("GET request received: %s", req.host);
    res.send(dbAutores);
});

app.post('/api/autores', cors(), (req, res) => {
    console.log("POST request received: %s", req.body)
    var autor = req.body;
    autor.id = ++actualId;
    dbAutores.push(autor);
    res.send(dbAutores);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log('SimpleAuthorCrud running on port %d', PORT);
})