var express = require('express');
var router = express.Router();
const Account = require('../model/account');
const Places = require('../model/places');
const Mcc = require('../model/mcc')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ msg: 'Api Test' });
});

router.get('/account', async (req, res, next) => {
  const getAccount = await Account.findAll()
  res.status(200).json(getAccount)
})

router.get('/places', async (req, res, next) => {
  const getPlaces = await Places.findAll()
  res.status(200).json(getPlaces)
})

router.get('/mcc', async (req, res, next) => {
  const getMcc = await Mcc.findAll()
  res.status(200).json(getMcc)
})

module.exports = router;
