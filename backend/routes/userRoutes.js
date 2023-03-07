const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/authUser')
const { registerUser, loginUser, getMe } = require('../controllers/userController')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/getme', isAuth, getMe)

module.exports = router;