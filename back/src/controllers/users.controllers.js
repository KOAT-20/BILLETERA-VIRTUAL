const userControl = {};
const userModel = require('../models/users.models.js');
const passport = require('passport');

userControl.registerUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  const newUser = new userModel({
    name, lastname, email, password
  })
  try {
    let message = 'Usuario creado!';
    newUser.password = await newUser.passEncrypt(password);
    await newUser.save();
    res.json({message: message});
  } catch (error) {
    res.json({Error: error.message})
  }
}

userControl.loginUSer = passport.authenticate('local', {
    failureRedirect: '/401',
    successRedirect: '/api/auth'
  })

userControl.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}

userControl.getUser = async (req, res) => {
  const user =  await userModel.findById(req.params.id);
    res.json(user);
}

module.exports = userControl;
