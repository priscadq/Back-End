'use strict';
module.exports = (sequelize, DataTypes) => {
  var Detalle_Venta = sequelize.define('Detalle_Venta', {
    
    id_venta: DataTypes.STRING,
    id_libro: DataTypes.STRING
  }, {tableName: 'Detalle_Venta', timestamps: false});
  Detalle_Venta.associate = function(models) {
    // associations can be defined here

    Detalle_Venta.belongsTo(models.Libro);
    Detalle_Venta.belongsTo(models.Venta);
  };
  return Detalle_Venta;
};