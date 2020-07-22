const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModel = require('../models/users.models.js');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const user = await UserModel.findOne({email})
  if (!user) {
    return done(null, false, {message: 'Correo no registrado!'});
  } else {
    const match = await user.passDesencrypt(password);
    if (match) {
      return done(null, user);
    } else {
      return done(null, false, {message: 'Contraseña Incorrecta!'});
    }
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (error, user) => {
    done(error, user);
  })
});
