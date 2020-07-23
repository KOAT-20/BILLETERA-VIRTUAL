const { Schema, model } = require('mongoose');

const walletSchema = new Schema ({
  amount: {type: Number, require: true},
  user_id: {type: Schema.Types.ObjectId, ref: 'users'}
}, {timestamps: true});

module.exports = model('wallet', walletSchema);
