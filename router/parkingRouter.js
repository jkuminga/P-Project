const express = require('express');
const router = express.Router();
const parking = require('../lib/parking');

router.get('/aispace', (req ,res)=>{
    parking.aispace(req, res);
})

router.post('/AIreceiver', (req, res)=>{
    parking.AI_receiver(req,res)
})

router.get('/center',(req, res)=>{
    parking.center(req, res)
})


router.post('/centerreceiver', (req, res)=>{
    parking.center_receiver(req,res)
})

module.exports= router;