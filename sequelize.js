const { Sequelize } = require("sequelize");

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql", // You can change this to 'postgres', 'sqlite', etc., depending on your database
  }
);

module.exports = sequelize;
