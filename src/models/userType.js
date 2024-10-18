import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const UserType = sequelize.define(
  "UserType",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user_types",
    timestamps: true,
  }
);

UserInfo.hasOne(UserType, { foreignKey: "id", sourceKey: "userTypeId" });

module.exports = UserType;
