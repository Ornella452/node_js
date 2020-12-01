const mongoose = require('mongoose');
const express = require('express');
const app = express();
const HotelRouter = require('./controller/hotel');
const RestaurantRouter = require('./controller/restaurant');
mongoose.connect('mongodb://localhost:27017/trippy_basics',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).catch(error => console.log(error));


app.use(express.json())
app.use('/hotel', HotelRouter)
app.use('/restaurant', RestaurantRouter)





const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port  ${port}`)
})

