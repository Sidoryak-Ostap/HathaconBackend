

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = express();

/*============ */
const {connectMongo} = require('./setup/connectMongoDb');
const API = require('./api/index.js');

const start = async () =>{
app.use(bodyParser.json());
app.use(cors());

await connectMongo(process.env.MONGO_DB_URL);

app.use(API.router);

app.get('/get' ,(req,res) =>{
    res.send('Hello world')
})
app.listen(process.env.PORT, () =>{
    console.log("Server was started on port ", process.env.PORT);
})

}

start();