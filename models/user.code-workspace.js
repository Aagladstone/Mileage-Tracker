module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [45]
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [45]
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [45]
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [45]
      }
    },
    {
      freezeTableName: true
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Car, {
      onDelete: "restrict",
      onUpdate: "restrict"
    });
  };
  return User;
};
