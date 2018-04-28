// SELECT `id`, `nombre`, `apellido`, `email`, `DireccionId` FROM `cliente` AS `Cliente` WHERE `Cliente`.`id` = 1;
  Cliente.findById(2).then(cliente => {
    console.log(cliente)
  })
  
  // SELECT `id`, `nombre`, `apellido`, `email`, `DireccionId` FROM `cliente` AS `Cliente` WHERE `Cliente`.`nombre` = 'asdfasdf' LIMIT 1;
  Cliente.findOne({ where: {nombre: 'matias'} }).then(cliente => {
    console.log(cliente)
  })