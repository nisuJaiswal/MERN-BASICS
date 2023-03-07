const express = require('express');
const router = express.Router();
const { getGoals, postGoals, putGoal, deleteGoal } = require('../controllers/goalController')
const { isAuth } = require('../middleware/authUser')

router.route('/').get(isAuth, getGoals).post(isAuth, postGoals);
router.route('/:id').put(isAuth, putGoal).delete(isAuth, deleteGoal)

module.exports = router;