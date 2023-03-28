
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle,
  // },
  options: {
    encrypt: dbConfig.options.encrypt,
    trustServerCertificate: dbConfig.options.trustServerCertificate
  },
  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./emp.model.js")(sequelize, Sequelize);

module.exports = db;
