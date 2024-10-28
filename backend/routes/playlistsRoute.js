const express = require('express'); 
const router = express.Router(); 

const playlistsController = require('../controllers/playlistsController'); 

router.get(`/:id`, playlistsController.showOne)
router.get(`/`, playlistsController.show)

module.exports = router; 
