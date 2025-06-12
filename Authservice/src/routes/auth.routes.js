const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authmiddleware = require('../middleware/authmiddleware')
const roleAuthorizer = require("../middleware/authorizationmiddleware")
const validationResult = require('../middleware/validateRequest')
const {signupValidator,loginValidator} = require("../validator/user.validator")

router.post('/register',[signupValidator,validationResult], authController.register);
router.post('/login',[loginValidator,validationResult], authController.login);
router.get('/me',[authmiddleware,roleAuthorizer('user')],authController.get)

module.exports = router;
