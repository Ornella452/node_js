const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelShema = new Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars : {
        type: Number,
        min: 1,
        max: 5

    
    },
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory : {
        type: Number,
        min: 1,
        max: 3

    },
    room: [{
        type: mongoose.Types.ObjectId,
        ref:'Room',
    }]
  
});

module.exports = new mongoose.model('Hotel', hotelShema);


