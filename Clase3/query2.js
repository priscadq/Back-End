/*
    SELECT `id`, `nombre`, `apellido`, `email`, `DireccionId` FROM `cliente` AS `Cliente` WHERE `Cliente`.`nombre` = 'asdfasdf';
    SELECT `id`, `calle` FROM `direccion` AS `Direccion` WHERE `Direccion`.`id` = 1;
    SELECT `id`, `numero`, `ClienteId` FROM `telefono` AS `Telefono` WHERE `Telefono`.`ClienteId` = 1;
  */
 Cliente.findAll({ where: { nombre: 'matias' } }).then(function(clientes) {

    clientes.forEach(cliente => {
      cliente.getDireccion().then(function(direccion) {
          console.log(direccion)
      });

      cliente.getTelefonos().then((telefonos) =>{

        console.log(telefonos)
      });

    });

  });