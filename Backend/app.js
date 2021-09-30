// REQUERIR los complementos.
// const express = require ('express');
// const morgan = require ('morgan');
// const cors = require ('cors');
// const path = require ('path');
// const history = require ('connect-history-api-fallback');

// luego de instalado Babel podemos reemplazar los const por import
// se deben de borrar los parentesis.
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


const app = express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/prueba';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => {
        console.log('Conectado a la base de datos')
    },
    err =>{
        err
    }
);

//MIDDLEWARE - Usando los complementos
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); // Este ya viene instalado en express
app.use(express.urlencoded({ extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));

// RUTAS - Esta es la aplicación principal - 
// app.get('/',function(req,res){
//     //res.send('Hola Mundo');
//     res.send('Esta es la primera aplicación');
// });
app.use('/api',require('./routes/nota'));

//MIDDLEWARE para VUE.js router modo history
const  history = require ('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// PUERTOS
// Esta funcion configura un puerto estático
// app.listen(3000,function(){
//     console.log("El servidor escucha por el puerto 3000"); // Mensaje para saber si está operativo y el puerto por donde escucha
// });

// acá se configura y muestra un puerto de forma dinámica
app.set('puerto',process.env.PORT||3000);
app.listen(app.get('puerto'),function(){
    console.log('Ejemplo app escuchando en puerto: '+app.get('puerto'));
})

