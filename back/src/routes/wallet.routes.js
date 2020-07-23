const { Router } = require('express');
const router = Router();
const {
  reloadWallet, getWallet
} = require('../controllers/wallet.controllers.js');

router.route('/')
  .get(getWallet)
  .post(reloadWallet)

module.exports = router;
