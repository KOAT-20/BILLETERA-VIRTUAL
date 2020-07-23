const userControl = {};
const userModel = require('../models/users.models.js');
const verifyToken = require('../services/verifyToken.js')
const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

userControl.registerUser = async (req, res) => {
  try {
    const { documents, name, phone, email, password } = req.body;
    const newUser = new userModel({
      documents, name, phone, email, password
    })
    const message = 'Usuario creado!';
    newUser.password = await newUser.passEncrypt(password);
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, config.secret, {
      expiresIn: 60 * 60 * 24
    });
    res.json({
      message: message,
      auth: true, token
    });
  } catch (error) {
    res.json({Error: error.message})
    res.status(500).send('There was a problem registering your user');
  }
}

userControl.getUser = async (req, res, verifyToken) => {
  const user =  await userModel.findById(req.params.id, { password: 0 });
  if (!user) {
    return res.status(404).send('Usuario no encontrdo');
  }
  res.status(200).json(user);
}

userControl.loginUser = async (req, res) => {
  const user = await userModel.findOne({email: req.body.email})
  if(!user) {
        return res.status(404).send('El correo no existe!')
    }
    // const validPassword = await user.comparePassword(req.body.password, user.password)
    // if (!validPassword) {
    //     return res.status(401).send({auth: false, token: null});
    // }
    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.status(200).json({auth: true, token});
}

userControl.logOut = async (req, res) => {
  res.status(200).send({ auth: false, token: null });
}

userControl.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}

userControl.deleteUser = async (req, res) => {
  const { _id } = req.body;
  await userModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Usuario eliminado!'})
}

module.exports = userControl;
