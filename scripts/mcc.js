
(async () => {
    const database = require('../db');
    const Mcc = require('../model/mcc');

 
    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await Mcc.bulkCreate([
            { mcc: 5811, tipo: "meal" },
            { mcc: 5812, tipo: "meal" },
            { mcc: 5813, tipo: "meal" },
            { mcc: 5814, tipo: "meal" },
            { mcc: 5411, tipo: "food" },
            { mcc: 5815, tipo: "culture" },
        ])
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();