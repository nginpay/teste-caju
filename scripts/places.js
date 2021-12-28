
(async () => {
    const database = require('../db');
    const Places = require('../model/places');

 
    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await Places.bulkCreate([
            { comerciante: 'UBER TRIP SAO PAULO BR', mcc: 5815, tipo: "culture" },
            { comerciante: 'UBER EATS SAO PAULO BR', mcc: 5811, tipo: "meal"  },
            { comerciante: 'PAG*JoseDaSilva RIO DE JANEI BR', mcc: 5815, tipo: "culture"  },
            { comerciante: 'PADARIA DO ZE SAO PAULO BR', mcc: 5811, tipo: "food"  }
        ])
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();