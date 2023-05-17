

const {Router} = require('express');


const router = Router();



const usersAPI = require('./users.api');



router.use(usersAPI.router);


module.exports = {router};