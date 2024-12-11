const express = require('express');
const router = express.Router();
const parking = require('../lib/parking');

router.get('/aispace', (req ,res)=>{
    parking.aispace(req, res);
})


router.get('/center',(req, res)=>{
    parking.center(req, res)
})

module.exports= router;