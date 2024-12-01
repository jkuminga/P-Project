const express = require('express');
const router = express.Router();
const parking = require('../lib/parking');

router.get('/aispace', (req ,res)=>{
    parking.aispace(req, res);
})

router.get('/centerfrontyard',(req, res)=>{
    parking.centerfrontyard(req, res)
})

router.get('/centerbackyard', (req, res)=>{
    parking.centerbackyard(req, res);
})
module.exports= router;