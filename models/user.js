const { DataTypes } = require('sequelize');

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  UserName: DataTypes.STRING,
  Phone: {
    type : DataTypes.STRING,
    unique: true,
  },
  Email: {
    type : DataTypes.STRING,
    unique: true,
  },
});

module.exports = User;
