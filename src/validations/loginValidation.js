

const {body} = require('express-validator');

const loginValidation = [
    body('email', 'Неправильний email').isEmail(),
    body('password', 'Пароль повинен містити мінімум 8 символів').isLength({min: 8})
]

module.exports = {loginValidation}