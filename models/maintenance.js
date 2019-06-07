module.exports = function (sequelize, DataTypes) {
  var Maintenance = sequelize.define(
    "Maintenance",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [45]
      },
      frecuency: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  Maintenance.associate = function (models) {
    Maintenance.hasMany(models.Car_Maintenance, {
      onDelete: "restrict",
      onUpdate: "restrict"
    });
  };
  return Maintenance;
};