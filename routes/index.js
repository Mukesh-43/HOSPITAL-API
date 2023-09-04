const express = require('express');
const router = express.Router();             // using router function to connect to the routes
const passport = require('passport');

const status= require('../controllers/status_Controller')

router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports)  // get request route to filter reports after authentication


module.exports = router;