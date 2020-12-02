const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomShema = new Schema({
    people: Number,
    price: Number,
    isBathroom :Boolean,
    
    
});

module.exports = new mongoose.model('Room', roomShema);


