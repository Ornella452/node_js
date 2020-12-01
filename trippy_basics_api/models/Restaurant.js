const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantShema = new Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars : {
        type: Number,
      
        

    },
    cuisine: String,
    priceCategory : {
        type: Number,
    }
});

module.exports = new mongoose.model('Restaurant', restaurantShema);