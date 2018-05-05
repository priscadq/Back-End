'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venta = sequelize.define('Venta', {
      fecha_venta: DataTypes.STRING
  }, {tableName: 'Venta', timestamps: false, freezeTableName: true,});
  Venta.associate = function(models) {
    // associations can be defined here
    Venta.hasMany(models.Detalle_Venta, {as: 'Detalles', foreignKey: 'ventdaID'});  
    Venta.belongsTo(models.Usuario, {as: 'Cliente'});
    Venta.belongsTo(models.Usuario, {as: 'Vendedor'});
    
  };
  return Venta;
};