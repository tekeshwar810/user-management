const { Sequelize } = require('sequelize');
const config = require('../config/config.js');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];
const sequelize = new Sequelize(
    //   dbConfig.database, dbConfig.username, dbConfig.password, {
    //   host: dbConfig.host,
    //   dialect: dbConfig.dialect,
    dbConfig.url,
    {

        dialect: dbConfig.dialect,
        dialectOptions: dbConfig.dialectOptions,
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
// db.User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = db;