const Sequelize = require('sequelize');
const database = require('../db');
 
const Mcc = database.define('mcc', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mcc: {
        type: Sequelize.DOUBLE
    },
    tipo: Sequelize.STRING
})
 
module.exports = Mcc;