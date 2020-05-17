const express = require('express');
const conectarDB = require('./config/db');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/',  routes());

// puerto de la app
const PORT = process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})

// // puerto y arrancar el servidor
// app.listen(4000, () => {
//     console.log('Servidor funcionando')
// })