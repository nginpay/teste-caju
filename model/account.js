const Sequelize = require('sequelize');
const database = require('../db');
 
const Account = database.define('accounts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    conta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    meal: {
        type: Sequelize.INTEGER
    },
    food: {
        type: Sequelize.INTEGER
    },
    culture: {
        type: Sequelize.INTEGER
    },
    flex: {
        type: Sequelize.INTEGER
    },
    tipo: Sequelize.STRING
})
 
module.exports = Account;