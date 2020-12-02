const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantShema = new Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars : {
        type: Number,
        min: 1,
        max: 3
      
        

    },
    cuisine: String,
    priceCategory : {
        type: Number,
        min: 1,
        max: 3
    },
    table: [{
        type: mongoose.Types.ObjectId,
        ref:'Table',
    }]

});

module.exports = new mongoose.model('Restaurant', restaurantShema);