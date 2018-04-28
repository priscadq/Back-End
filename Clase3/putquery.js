//modificamos datos de un cliente
// UPDATE `cliente` SET `nombre`='Rodolfo' WHERE `id` = UNID
router.put('/cliente/:id', function(req, res, next) {

  Cliente.findById(req.params.id).then(cliente => {
    
    cliente.update({
      nombre: req.body.nombre, 
      apellido: req.body.apellido, 
      email: req.body.email
    }).then(() => {
      console.log('El cliente fue actualizado!')
    })
  })
});