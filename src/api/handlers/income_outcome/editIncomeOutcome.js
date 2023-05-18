

const {IncomeOutcomeModel} = require('../../../models/IncomeOutcomeModel');

const {CashModel} = require('../../../models/cashModel');
const {CardModel} = require('../../../models/cardModel');
const jwt = require('jsonwebtoken');

module.exports.editIncomeOutcome = async (req,res)=>{


    const {category, type, method, costs, document_id, token} = req.body;

    const decoded_token  = jwt.verify(token, 'secret123');

    const queryDb = {}

    if(category) queryDb.category = category; 
    if(type) queryDb.type = type; 
    if(method) queryDb.method = method;
    if(costs)  queryDb.costs = costs; 


    const doc = await IncomeOutcomeModel.findOne({_id: document_id});



    

    res.status(200).send('Document was updated');
} 