module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define(
      "Trip",
      {
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        totalmiles: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
      },
      {
        freezeTableName: true
      }
    );
    Trip.associate = function(models) {
        Trip.belongsTo(models.Car, {
          foreignKey: {
            allowNull: false
          }
        }),
        Trip.hasMany(models.Trip_Purpose, {
          onDelete: "restrict",
          onUpdate: "restrict"
        });
      };
    return Trip;
  };
  