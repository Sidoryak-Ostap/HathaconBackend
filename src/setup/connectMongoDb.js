
const mongoose = require('mongoose');



module.exports.connectMongo = async (url) => {
    await mongoose.connect(url).then(() =>{
        console.log('Db is connected');
    }).catch(err =>{
        console.log(err);
        console.log('Something went wrong during db connection');
    })
}