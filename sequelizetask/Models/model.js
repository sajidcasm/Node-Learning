const Sequelize = require("sequelize");

const db = require("../database.js");

const sequelizeModal = db.define("SequelizeModel", {
  title: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },

  
},
  {
    tableName: "sequelize_table", // 👈 Actual table name
    timestamps: false,            // ye sequelize feature h , check krega ki createdAt aur updatedAt by default exist krte hai ya nahi !
  });


module.exports = sequelizeModal;