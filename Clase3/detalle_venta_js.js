'use strict';
module.exports = (sequelize, DataTypes) => {
  var DetalleVenta = sequelize.define('DetalleVenta', {}, {tableName: 'detalle_venta', timestamps: false});
  
  DetalleVenta.associate = function(models) {
    // uno a uno
    DetalleVenta.belongsTo(models.Venta, {as: 'Venta'});
    DetalleVenta.belongsTo(models.Libro, {as: 'Libro'});

  };

  return DetalleVenta;
};