const express=require('express');
const router=express.Router();
const passengerController = require('./../services/mobile-applications/passenger-app/controller/PassengerController');


router.post('/registration',passengerController.passengerRegistration);

module.exports=router;
