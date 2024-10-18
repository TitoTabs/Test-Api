import { DataTypes } from "sequelize";
import sequelize from "../sequelize";
import UserType from "./UserType";

const UserInfo = sequelize.define(
  "UserInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserType, // Reference the UserType model
        key: "id", // The key in UserType model
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user_info",
    timestamps: true,
  }
);

User.hasOne(UserInfo, { foreignKey: "id", sourceKey: "userInfoId" });

module.exports = UserInfo;
