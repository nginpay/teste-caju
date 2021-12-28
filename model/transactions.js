const Sequelize = require('sequelize');
const database = require('../db');
 
const Transactions = database.define('transactions', {
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
    totalAmmount: {
        type: Sequelize.INTEGER,
    },
    mcc: Sequelize.STRING,
    comerciante: Sequelize.STRING,
    transactionId: Sequelize.STRING
})
 
module.exports = Transactions;