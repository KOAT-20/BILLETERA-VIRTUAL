const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const { walletSchema } = require('./wallet.models.js');
const Wallet = model('wallet', walletSchema);

const userSchema = new Schema ({
  documents: {type: Number, require: true},
  name: {type: String, require: true},
  phone: {type: Number, require: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  wallet_id: [{type: Schema.Types.ObjectId, ref: Wallet}]
}, {timestamps: true});

userSchema.methods.passEncrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.passDesencrypt = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('users', userSchema);
