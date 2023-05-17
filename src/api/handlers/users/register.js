const { validationResult } = require("express-validator");

const {UserModel} = require('../../../models/usersModel');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.userRegister = async (req,res) =>{


    const {email, password } = req.body;

    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        return res.status(400).send(validationErrors.array());
    }

    const userExists = await UserModel.findOne({email: email});

    if(userExists) {
        return res.status(400).send('This email is already taken');
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = new UserModel({
        email: email,
        passwordHash: password_hash
    })

    const doc = await user.save();

    const {passwordHash, ...userData} = doc._doc;

    const token = jwt.sign({_id: doc._id},'secret123', { expiresIn: '1d'});

    res.status(200).send({
        userData,
        token
    })

}