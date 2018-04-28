'use strict';
module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define('Usuario', {
    
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    //id_direccion: DataTypes.STRING,
    es_vendedor: DataTypes.STRING
  }, {tableName: 'Usuario', timestamps: false}); //agregado tablename y timestamps
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.belongsTo(models.Direccion);







    //Cliente.belongsTo(models.Direccion);
    //direccionID
    //setDireccion
    //getDireccoin




  };
  return Usuario;
};