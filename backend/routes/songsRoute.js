const express = require('express'); 
const router = express.Router(); 

const songsController = require('../controllers/songsController'); 

router.get(`/`, songsController.show)

module.exports = router; 
