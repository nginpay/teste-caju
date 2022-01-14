var express = require('express');
const db = require('../db');
var router = express.Router();
const Account = require('../model/account')
const Places = require('../model/places');
const Mcc = require('../model/mcc');

/* GET home page. */
router.post('/', async (req, res, next) => {

  // try {

    const tr_account = req.body.account;
    const tr_totalAmount = req.body.totalAmount;
    const tr_mcc = req.body.mcc;
    const tr_comerciante = req.body.comerciante;

    const account = await Account.findOne({where: {conta: tr_account}});
    console.log(account)

    const {mcc, tipo} = await Mcc.findOne({where: {mcc : tr_mcc}});


    const saldo = await db.sequelize.query(`SELECT ${tipo} from accounts where conta = ${tr_account}`);

    console.log(saldo)

    // if(totalAmount > saldo){
    //   if(account.flex > totalAmount){
    //     console.log("transação feita com valor do caixa. saldo insuficiente")
    //     return res.status(200).json({ "code": "00" })
    //   }
    // }

    // if(totalAmount > tipo || tr_mcc != mcc){
    //   console.log("saldo insuficiente")
    //    return res.status(200).json({ "code": "51" })
    // }
    // console.log("transação realizada com sucesso")
    // return res.status(200).json({ "code": "00" })

  // }
  // catch (e) {

  //   return res.status(200).json({ "code": "07" })

  // }

});

module.exports = router;
