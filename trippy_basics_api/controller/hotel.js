
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Hotel = require('../models/Hotel')

//module.exports = (Hotel) => {

router.get('/', async (req, res) => {

    try {
        const resultat = await Hotel.find();
        res.json(resultat)

    } catch (error) {
        console.log(error);
        res.status(400).json('message : error')
    }

})

router.get('/:id', async (req, res) => {
    try {
       const resultatId = await Hotel.findById(req.params.id)
       res.json(resultatId)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})


router.post('/', async (req, res) => {

    try {
        const { name, address,city, country, stars, hasSpa, hasPool, priceCategory } = req.body
        const newHotel = new Hotel({
            
            name,
            address,
            city,
            country,
            stars,
            hasSpa,
            hasPool,
            priceCategory
        });
        const newAddHotel = await newHotel.save();
        console.log("result adress", newAddHotel);
        res.json(newHotel)
     

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