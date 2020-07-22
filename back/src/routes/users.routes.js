const { Router } = require('express');
const router = Router();
const {
  getUsers, registerUser, loginUSer, getUser, deleteUser
} = require('../controllers/users.controllers.js');

router.route('/')
  .get(getUsers)
  .post(registerUser)

router.route('/auth')
  .post(loginUSer)

router.route('/:id')
  .get(getUser)
  .delete(deleteUser)

module.exports = router;
