

var bcrypt = require('bcrypt');

// Import the ORM to create functions that will interact with the database.
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logout: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });


  return User;
};
