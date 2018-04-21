'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venta = sequelize.define('Venta', {
    
    id_cliente: DataTypes.STRING,
    id_vendedor: DataTypes.STRING,
    fecha_venta: DataTypes.STRING
  }, {tableName: 'Usuario', timestamps: false});
  Venta.associate = function(models) {
    // associations can be defined here
  };
  return Venta;
};