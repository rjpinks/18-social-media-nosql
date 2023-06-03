const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtControllers');

router.route('/')
    .get(getThoughts)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router.route("/single")
  .get(getSingleThought)

router.route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)
    

module.exports = router;