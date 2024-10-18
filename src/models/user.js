import { DataTypes } from "sequelize";
import sequelize from "../sequelize";
import UserInfo from "./userInfo";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userInfoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserInfo, // Reference the UserType model
        key: "id", // The key in UserType model
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;
