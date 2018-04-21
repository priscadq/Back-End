'use strict';
module.exports = (sequelize, DataTypes) => {
  var Direccion = sequelize.define('Direccion', {
    
    calle: DataTypes.STRING,
    pais: DataTypes.STRING,
    provincia: DataTypes.STRING,
    ciudad: DataTypes.STRING
  }, {tableName: 'Usuario', timestamps: false});
  Direccion.associate = function(models) {
    // associations can be defined here
  };
  return Direccion;
};