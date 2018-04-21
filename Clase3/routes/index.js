var express = require('express');
var router = express.Router();

var db = require('../models');
var Usuario = db.Usuario

/* GET home page. */



router.get('/', function(req, res, next) {

  Usuario.findAll().then(function(usuarios) {

     usuarios.forEach(u => { 
       console.log(u.id)
       
     });

  });

  });

/*

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

*/
module.exports = router;
