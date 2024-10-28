const express = require('express'); 
const router = express.Router(); 

const tracksController = require('../controllers/tracksController'); 

router.get(`/:id`, tracksController.showOne)
router.get(`/`, tracksController.show)

module.exports = router; 
