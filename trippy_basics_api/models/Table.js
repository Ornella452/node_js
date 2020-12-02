const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableShema = new Schema({
    seat: Number,
    isVIP : Boolean,
    
    
});

module.exports = new mongoose.model('Table', tableShema);


