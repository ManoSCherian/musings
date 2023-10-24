const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    email: String,
    pinCode: String,
    Address: string
})



module.exports = mongoose.model('cowin', cardSchema, false);

