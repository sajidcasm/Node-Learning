import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME ||'auth_system',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'sajidali',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;

// in app . js u gotta do this thing now 
// const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ Database Connected Successfully");
//   } catch (error) {
//     console.error("❌ Database Connection Failed");
//     console.error(error.message);
//   }
// };

// connectDB();