

const Sequelize = require ('sequelize');

 new Sequelize('sequelize_db', 'postgres', 'sajidali123', {
    // db , username, password 
    host:'localhost',
    dialect: 'postgres',
    operatorAliases : false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
})
