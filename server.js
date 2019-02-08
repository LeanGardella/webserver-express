const express = require('express');
const app = express();
const hbs = require('hbs');

// obtener puerto desde el entorno
const port = process.env.PORT || 3000;

// helpers
require('./hbs/helpers/helpers');


// middle -> define un callback que se ejecuta siempre.
app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Leandro'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port);
console.log(`Escuchando el puerto ${port}.`);