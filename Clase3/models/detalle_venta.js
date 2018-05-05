'use strict';
module.exports = (sequelize, DataTypes) => {
  var Detalle_Venta = sequelize.define('Detalle_Venta', {
    
  }, {tableName: 'Detalle_Venta', timestamps: false});
  Detalle_Venta.associate = function(models) {
    // associations can be defined here

    Detalle_Venta.belongsTo(models.Libro, {as: 'Libro'});
    Detalle_Venta.belongsTo(models.Venta, {as: 'Venta'});
    
  };
  return Detalle_Venta;
};