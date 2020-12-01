const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelShema = new Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars : {
        type: Number,
    
    },
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory : {
        type: Number,

    }
});

module.exports = new mongoose.model('Hotel', hotelShema);


