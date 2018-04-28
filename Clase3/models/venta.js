'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venta = sequelize.define('Venta', {
    
    id_cliente: DataTypes.STRING,
    id_vendedor: DataTypes.STRING,
    fecha_venta: DataTypes.STRING
  }, {tableName: 'Venta', timestamps: false});
  Venta.associate = function(models) {
    // associations can be defined here
    Venta.hasMany(models.Detalle_Venta);
    Venta.belongsTo(models.Usuario);
    
  };
  return Venta;
};