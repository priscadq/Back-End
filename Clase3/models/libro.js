'use strict';
module.exports = (sequelize, DataTypes) => {
  var Libro = sequelize.define('Libro', {
    
    nombre: DataTypes.STRING,
    resumen: DataTypes.STRING,
    editorial: DataTypes.STRING,
    precio: DataTypes.STRING,
    stock: DataTypes.STRING
  }, {tableName: 'Libro', timestamps: false, freezeTableName: true,});
  Libro.associate = function(models) {
    // associations can be defined here
    Libro.hasMany(models.Detalle_Venta, {as: 'Detalles', foreignKey: 'LibroID'});
  };
  return Libro;
};