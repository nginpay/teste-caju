const Sequelize = require('sequelize');
const database = require('../db');
 
const Places = database.define('places', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comerciante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mcc: {
        type: Sequelize.INTEGER
    },
    tipo: Sequelize.STRING
})
 
module.exports = Places;