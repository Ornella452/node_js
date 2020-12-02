
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

//module.exports = (Hotel) => {

router.get('/', async (req, res) => {

    try {
        const resultat = await Hotel.find()
        res.json(resultat)

    } catch (error) {
        console.log(error);
        res.status(400).json('message : error')
    }

})

router.get('/:id', async (req, res) => {
    try {
       const resultatId = await Hotel.findById(req.params.id).populate('room');
       res.json(resultatId)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})


router.post('/', async (req, res) => {

    try {

        const {people, price, isBathroom} = req.body.room
        const newRoom = new Room({
            people,
             price,
              isBathroom, 
              
        })
        await newRoom.save()
        res.json(newRoom)

      
        const { name, address,city, country, stars, hasSpa, hasPool, priceCategory, room} = req.body.hotel
        const newHotel = new Hotel({
            
            name,
            address,
            city,
            country,
            stars,
            hasSpa,
            hasPool,
            priceCategory,
            room : newRoom._id
            
        });
        const newAddHotel = await newHotel.save();
        console.log("result adress", newAddHotel);
        res.json(newHotel)

        // {
        //     "hotel":{
        //         "name": "yes", 
        //         "address":"avenue machin lulu",
        //         "city":"pantin", 
        //         "country": "france", 
        //         "stars": 2, 
        //         "hasSpa": "true",
        //          "hasPool":"true",
        //           "priceCategory":1
        //     },
        //     "room":{
        //           "people":1 ,
        //         "price":2,
        //         "isBathroom": "true"
        //     }
        // }
      


        
       
     

    } catch (error) {

        console.log(error);
        res.status(400).json('error')

    }


})


router.put('/:id', async (req, res) => {
    const {  name, address,city, country, stars, hasSpa, hasPool, priceCategory } = req.body
    try {
       const resultatUpdate = await Hotel.updateOne({_id: req.params.id}, {$set: {
        name,
        // address,
        // city,
        // country,
        // stars,
        // hasSpa,
        // hasPool,
        // priceCategory
       }})
       res.json(resultatUpdate)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})

router.patch('/:id', async (req, res) => {
    const {  name, address,city, country, stars, hasSpa, hasPool, priceCategory } = req.body
    try {
       const resultatUpdate = await Hotel.updateOne({_id: req.params.id}, {$set: {
        name,
        address,
        city,
        country,
        stars,
        hasSpa,
        hasPool,
        priceCategory
       }})
       res.json(resultatUpdate)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})



router.delete('/:id', async (req, res) => {
    try {
       const resultatRemove = await Hotel.remove({_id: req.params.id})
       res.json(resultatRemove)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})
module.exports = router
//}