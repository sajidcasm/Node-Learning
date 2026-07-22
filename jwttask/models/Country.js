import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Country = sequelize.define(
  "Country",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
  },
  {
    tableName: "countries",
    timestamps: true,
  }
);

export default Country;