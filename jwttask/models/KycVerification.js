import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const KycVerification = sequelize.define(
  "KycVerification",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    applicant_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "kyc_verifications",
    timestamps: true,
  }
);

export default KycVerification;