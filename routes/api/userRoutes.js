const router = require('express').Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);



module.exports = router;
