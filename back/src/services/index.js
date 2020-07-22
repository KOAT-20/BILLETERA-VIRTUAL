const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config.js');

exports.createToken = function(name) {
const payload = {
    sub: name._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};
