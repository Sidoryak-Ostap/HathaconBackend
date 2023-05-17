
const {Router} = require('express');


const router = Router();
const {wrapperAPI} = require('../shared/wrapperAPI');
const {loginValidation} = require('../validations/loginValidation');


const {users} = require('./handlers/index');




router.post('/registration', loginValidation,  wrapperAPI(users.userRegister));
router.post('/login', loginValidation, wrapperAPI(users.userLogin));








module.exports = {router}

