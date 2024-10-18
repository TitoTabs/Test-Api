import { Sequelize } from "sequelize";
import config from "../config/config.json" assert { type: "json" };

// Choose the correct environment (development, test, production)
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

// Initialize Sequelize instance
const sequelizeDb = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

export default sequelizeDb;
