var express = require('express');
var router = express.Router();

var db = require('../models');
var Usuario = db.Usuario;
var Venta = db.Venta;
var Libro = db.Libro;


/* GET home page. */



router.get('/', function(req, res, next) {


/*
  // Busca todos los usuarios, y marca el nombre
  Usuario.findAll().then(function(usuarios) {
     usuarios.forEach(u => { 
       console.log(u.nombre)
     });
  });
 */

 /*
  //Busca usuario con where
   Usuario.findAll({ where: { nombre: 'gonzalo' } }).then(function(u) {
    u.forEach(usuario => {
      usuario.getDireccion().then(function(direccion) {
          console.log(direccion)
      });
    });
  });
*/

/*
  //Busca una UN usuairio, el primero, si esta repetido el query
  // SELECT `id`, `nombre`, `apellido`, `email`, `DireccionId` FROM `cliente` AS `Cliente` WHERE `Cliente`.`nombre` = 'asdfasdf' LIMIT 1;
    Usuario.findOne({ where: {nombre: 'Juan'} }).then(usuario => {
     console.log(usuario)
  });
*/

/*
  //Busca por ID
  // SELECT `id`, `nombre`, `apellido`, `email`, `DireccionId` FROM `cliente` AS `Cliente` WHERE `Cliente`.`id` = 1;
    Usuario.findById(3).then(u => {
     console.log(u)  
  })
*/


/*
  // Busca todos los libros
  Libro.findAll().then(function(ls) {
     ls.forEach(u => { 
       console.log(u.nombre)
     });
  });
*/

  // Busca las ventas
  Venta.findAll().then(function(vs) {
    vs.forEach(u => { 
      console.log(u)
    });
 });

  });

/*

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

*/
module.exports = router;
