
//index.js
(async () => {
    const database = require('../db');
    const Mcc = require('../model/mcc');
    const Places = require('../model/places');
    const Transactions = require('../model/transactions');
  
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
  })();