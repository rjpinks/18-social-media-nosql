const router = require('express').Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

router.route('/users')
    .get(getUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
