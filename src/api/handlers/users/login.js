
const {UserModel} = require('../../../models/usersModel');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


module.exports.userLogin = async (req,res) =>{

    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        return res.status(401).send(validationErrors.array());
    }

    const {email, password} = req.body;

    const user = await UserModel.findOne({email: email});

    if(!user) {
        return res.status(401).send('Incorect email or password');
    }

    const passwordIsEqual = await bcrypt.compare(password, user.passwordHash);

    if(!passwordIsEqual) {
        return res.status(401).send('Incorect email or password');
    }

    const {passwordHash, ...userData} = user._doc;
    const token = jwt.sign({_id: user._id}, 'secret123', {expiresIn: '1d'});

    res.status(200).send({
        userData, token
    })
}