module.exports = function(sequelize, DataTypes) {
    var Trip_Purpose = sequelize.define(
      "Trip_Purpose",
      {
        purpose: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [45]
        }
      },
      {
        freezeTableName: true
      }
    );
    // Trip_Purpose.associate = function(models) {
    //     Trip_Purpose.belongsTo(models.Trip, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    // };
    return Trip_Purpose;
  };