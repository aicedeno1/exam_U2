const express = require('express');
const HdmiCable = require('../models/hdmiCable'); 
const router = express.Router();

router.post('/cable', async (req, res) => {
    try {
        const newCable = new HdmiCable({
            cableId: req.body.cableId,
            brand: req.body.brand,
            length: req.body.length,
            lengthUnit: req.body.lengthUnit,
            price: req.body.price,
            color: req.body.color
        });

        const savedCable = await newCable.save();
        res.status(201).json({
            message: 'HDMI cable added successfully',
            cable: savedCable
        });
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;