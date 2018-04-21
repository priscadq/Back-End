'use strict';
module.exports = (sequelize, DataTypes) => {
  var Detalle_Venta = sequelize.define('Detalle_Venta', {
    
    id_venta: DataTypes.STRING,
    id_libro: DataTypes.STRING
  }, {tableName: 'Usuario', timestamps: false});
  Detalle_Venta.associate = function(models) {
    // associations can be defined here
  };
  return Detalle_Venta;
};