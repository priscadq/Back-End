var express = require('express');
var router = express.Router();

var db = require('../models');
var Usuario = db.Usuario;
var Venta = db.Venta;
var Libro = db.Libro;
var Direccion = db.Direccion;


  
  /* GET home page. */
  router.get('/', function(req, res, next) {

    //esta basofia necesita que este todo anidado, es una caca horrible!
    
      // Busca todos los usuarios, y marca el nombre
      Usuario.findAll().then(function(u) {

                   
       u.forEach(p => {

          p.getCompraCliente().then(function (c) {
            
            console.log(c)

            res.render('myview', {
              'pUsuarios': c
              
            }) 
            

    
          });       
        });
      });


      /*      
      Libro.findAll().then(function(l) {
        res.render('myview', {
          variableLibros: l,
        }) 
      });*/
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
    /*
      // Busca las ventas
      Venta.findAll().then(function(vs) {
        vs.forEach(u => { 
          console.log(u)
        });
    });
    */
  });    




  // Agregamos un nuevo cliente
  // INSERT INTO `cliente` (`id`,`nombre`,`apellido`,`email`) VALUES (DEFAULT,UNNOMBRE,UNAPELLIDO,UNEMAIL);
  router.post('/usuario', function(req, res, next) {
    console.log(req.body.vendedor);
    const direccion = Direccion.build({
      calle: req.body.direccion,
      pais: req.body.pais,
      provincia: req.body.provincia,
      ciudad: req.body.ciudad
    })
     direccion.save().then(() => {
      const  u = Usuario
      .create(
        {
          nombre: req.body.nombre, 
          apellido: req.body.apellido, 
          email: req.body.email,
          vendedor: req.body.vendedor
          
        }
      ).then((cli) => {
        console.log(req.body.vendedor);
        cli.setDireccion(direccion)
        console.log('El cliente fue guardado')
      })
    })
  });


  //borramos un cliente
  // DELETE FROM `cliente` WHERE `id` = 2 LIMIT 1
  router.delete('/usuario/:id', function(req, res, next) {
    Usuario.findById(req.params.id).then(u => {
      u.destroy({ force: true })
     })
  });

  //modificamos datos de un cliente
  // UPDATE `cliente` SET `nombre`='Rodolfo' WHERE `id` = UNID
  router.put('/usuario/:id', function(req, res, next) {
    Usuario.findById(req.params.id).then(u => {
      u.update({
        nombre: req.body.nombre, 
      }).then(() => {
        console.log('El cliente fue actualizado!')
      })
    })
  });




//----------------------------------------------------------------------------------------------------------------------
/*
let nombre= "prisca"
let apellido = "diaz"
let lt = [ "Argentina", "Alemania", "Brasil", "Peru", "Uruguay", "Chile"]


    router.get('/', function(req, res, next) {
     res.render('myview', {nombre, apellido, lt});
    });
*/
module.exports = router;
