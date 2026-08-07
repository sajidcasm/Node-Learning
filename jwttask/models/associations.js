import User from "./User.js";
import KycVerification from "./KycVerification.js";

User.hasOne(KycVerification, { foreignKey: "user_id" });
KycVerification.belongsTo(User, { foreignKey: "user_id" });
