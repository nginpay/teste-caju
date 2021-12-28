const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './transactions.sqlite'
  })
 
module.exports = sequelize;