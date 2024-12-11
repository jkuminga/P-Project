const express = require('express');
const router = express.Router();
const parking = require('../lib/parking');

router.get('/aispace', (req ,res)=>{
    parking.aispace(req, res);
})

router.get('/refresh/AI', (req, res)=>{
    parking.aiUpdate(req, res);
})

router.get('/center',(req, res)=>{
    parking.center(req, res)
})

router.get('/refresh/center', (req, res)=>{
    parking.centerUpdate(req, res);
})

module.exports= router;