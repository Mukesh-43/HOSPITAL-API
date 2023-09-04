const express = require('express'); 
const router = express.Router();                 // using router function to connect to the routes
const patient = require('../controllers/patient_Controller')
const passport = require('passport');


router.post('/register',passport.authenticate('jwt',{session:false}),patient.register)               // post request route for patient register after authentication
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patient.createReport)  // post request route to creating reports after authentication
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patient.patientReports)   // get request route to show all reports after authentication

module.exports = router;