const {body} = require('express-validator')

const Roles = ['user','driver','admin']
exports.signupValidator=[

    body('email').isEmail().withMessage("valid email format is required"),
    body('password').isLength({min:6}).withMessage("password should be alphanumeric and min length should be 6"),
    body('name').optional(),
    body('role').isIn(Roles).withMessage("Role is required")

]

exports.loginValidator=[
    body('email').notEmpty().isEmail().withMessage("valid email format is required"),
    body('password').notEmpty()
]