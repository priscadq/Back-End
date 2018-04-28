//borramos un cliente
// DELETE FROM `cliente` WHERE `id` = 2 LIMIT 1
router.delete('/cliente/:id', function(req, res, next) {

  Cliente.findById(req.params.id).then(cliente => {
    
    cliente.destroy({ force: true })
  })
});


//importar axios en componente --> import axios from 'axios'; para react
