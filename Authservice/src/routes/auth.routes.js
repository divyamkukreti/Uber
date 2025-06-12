const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const middleware = require('../middleware/authmiddleware')
const validationResult = require('../middleware/validateRequest')
const {signupValidator,loginValidator} = require("../validator/user.validator")

router.post('/register',[signupValidator,validationResult], authController.register);
router.post('/login',[loginValidator,validationResult], authController.login);
router.get('/me',[middleware],authController.get)

module.exports = router;
