
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Restaurant = require('../models/Restaurant')
const Table = require('../models/Table')

//module.exports = (Restaurant) => {


router.get('/', async (req, res) => {

    try {
        const resultat = await Restaurant.find();
        res.json(resultat)

    } catch (error) {
        console.log(error);
        res.status(400).json('message : error')
    }

})

router.get('/:id', async (req, res) => {
    try {
       const resultatId = await Restaurant.findById(req.params.id).populate('table')
       res.json(resultatId)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})


router.post('/', async (req, res) => {

    try {


        const {seat, isVIP} = req.body.table
        const newTable = new Table({
            seat, 
            isVIP
              
        })
        await newTable.save()
        res.json(newTable)




        const { name, address,city, country, stars, cuisine, priceCategory } = req.body.restaurant
        const newRestaurant = new Restaurant({
            
            name,
            address,
            city,
            country,
            stars,
            cuisine,
            priceCategory,
            table: newTable._id
        });
        const newAddRestaurant = await newRestaurant.save();
        console.log("result adress", newAddRestaurant);
        res.json(newRestaurant)
     

        /// exemple 


        // {
        //     "restaurant":{
        //         "name": "Bonne nuit", 
        //         "address":"avenue machin lulu",
        //         "city":"pantin", 
        //         "country": "france", 
        //         "stars": 2, 
        //           "priceCategory":1
        //     },
        //     "table":{
        //           "seat": 1, 
        //            "isVIP": "true"
        //     }
        // }
      

    } catch (error) {

        console.log(error);
        res.status(400).json('error')

    }


})


router.put('/:id', async (req, res) => {
    const {  name, address,city, country, stars, cuisine, priceCategory } = req.body
    try {
       const resultatUpdate = await Restaurant.updateOne({_id: req.params.id}, {$set: {
        name,
        // address,
        // city,
        // country,
        // stars,
        // cuisine,
        // priceCategory
       }})
       res.json(resultatUpdate)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})

router.patch('/:id', async (req, res) => {
    const { name, address,city, country, stars, cuisine, priceCategory } = req.body
    try {
       const resultatUpdate = await Restaurant.updateOne({_id: req.params.id}, {$set: {
        name,
        address,
        city,
        country,
        stars,
        cuisine,
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
       const resultatRemove = await Restaurant.remove({_id: req.params.id})
       res.json(resultatRemove)
    } catch (error) {

        console.log(error);
        res.status(400).json('message : error')
    }
})
//}
module.exports = router
