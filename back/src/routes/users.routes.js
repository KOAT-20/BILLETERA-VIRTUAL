const { Router } = require('express');
const router = Router();
const {
  getUsers, registerUser, loginUSer, getUser
} = require('../controllers/users.controllers.js');

router.route('/')
  .get(getUsers)
  .post(registerUser)

router.route('/auth')
  .post(loginUSer)

router.route('/:id')
  .get(getUser)

module.exports = router;
