const { Router } = require('express');
const router = Router();
const {
  getUsers, registerUser, loginUser, logOut, getUser, deleteUser
} = require('../controllers/users.controllers.js');

router.route('/')
  .get(getUsers)
  .post(registerUser)

router.route('/auth')
  .post(loginUser)

router.route('/logout')
  .get(logOut)

router.route('/:id')
.get(getUser)
  .delete(deleteUser)


module.exports = router;
