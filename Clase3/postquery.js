// Agregamos un nuevo cliente
// INSERT INTO `cliente` (`id`,`nombre`,`apellido`,`email`) VALUES (DEFAULT,UNNOMBRE,UNAPELLIDO,UNEMAIL);
router.post('/cliente', function(req, res, next) {

  const direccion = Direccion.build({calle: req.body.direccion})
  
  direccion.save().then(() => {

    const cliente = Cliente
    .create(
      {
        nombre: req.body.nombre, 
        apellido: req.body.apellido, 
        email: req.body.email
      }
    ).then((cli) => {
      cli.setDireccion(direccion)
      console.log('El cliente fue guardado')
    })
  })
});