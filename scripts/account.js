
(async () => {
    const database = require('../db');
    const Account = require('../model/account');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await Account.create({
            conta: "123",
            meal: 20,
            food: 40,
            culture: 10,
            flex: 30,
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();