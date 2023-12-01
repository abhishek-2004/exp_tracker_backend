// specify structure to mongodb documents in this file


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create two structures for this document
//1 categories => field => ['type', 'color']
const categories_model = new Schema({
    type: {type : String, default:"Investment"},
    color:{type: String, default:'#ECBE44'}
})


//2 transactions => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name: {type: String, default:"Anonymous"},
    type: {type: String, default:"Investment"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Categories = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}
