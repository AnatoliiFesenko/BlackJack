const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Balance = sequelize.define("balances", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  balance: { type: DataTypes.INTEGER, defaultValue: 200 },
});

User.hasOne(Balance);
Balance.belongsTo(User);

module.exports = {
  User,
  Balance,
};
