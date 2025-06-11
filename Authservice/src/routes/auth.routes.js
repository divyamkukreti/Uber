const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const middleware = require('../middleware/authmiddleware')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me',[middleware],authController.get)

module.exports = router;
