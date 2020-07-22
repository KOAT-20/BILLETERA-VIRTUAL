const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
  document: {type: Number, require: true},
  name: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  phone: {type: Number, require: true},
  password: {type: Number, require: true}
}, {timestamps: true});

userSchema.methods.passEncrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.passDesencrypt = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('users', userSchema);
