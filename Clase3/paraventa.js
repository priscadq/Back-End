router.get('/venta', function(req, res, next) {

  Venta.findAll().then(function(ventas) {

    ventas.forEach(venta => {
      
      console.log(venta.getDetalles())
    });

  });

});

router.get('/libro', function(req, res, next) {

  Libro.findAll().then(function(libros) {

    libros.forEach(libro => {
      
      console.log(libro.getDetalles())
    });

  });

});