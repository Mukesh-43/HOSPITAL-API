
const express = require('express');

const router = express.Router();           // using router function to connect to the routes

const doctor = require('../controllers/doctor_Controller')

router.post('/register',doctor.create)     // post request route for doctor register

router.post('/login',doctor.createSession) // post request route for doctor login

module.exports = router; 