'use strict';
module.exports = (sequelize, DataTypes) => {
  var Libro = sequelize.define('Libro', {
    
    nombre: DataTypes.STRING,
    resumen: DataTypes.STRING,
    editorial: DataTypes.STRING,
    precio: DataTypes.STRING,
    stock: DataTypes.STRING
  }, {tableName: 'Libro', timestamps: false});
  Libro.associate = function(models) {
    // associations can be defined here
  };
  return Libro;
};