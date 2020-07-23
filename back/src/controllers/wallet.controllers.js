const walletControl = {};
const walletModel = require('../models/wallet.models.js');
const userModel = require('../models/users.models.js');

walletControl.reloadWallet = async (req, res) => {
  try {
    const newWallet = new walletModel(req.body); /* Crear comunidad para el solicitante */
    const user = await userModel.findById(req.params); /* Buscar solicitante para asignar comunidad */
    newWallet.user_id = user; /* Asignar al usuario como proveniente de la comunidad */
    await newWallet.save(); /* Guardar comunidad para el usuario */
    user.wallet_id.push(newWallet); /* Asignar comunidad dentro del array del solicitante */
    await user.save(); /* Guardar solicitante con su comunidad */
    res.send(newWallet);
    res.json({message: 'Wallet Recargada!'})
  } catch (error) {
    res.json({message: error})
  }
}

walletControl.getWallet = async (req, res) => {
  const wallet = await walletModel.find();
  res.json(wallet);
}

module.exports = walletControl;
