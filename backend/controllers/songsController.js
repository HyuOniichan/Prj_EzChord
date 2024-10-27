const songsData = require('../models/songsModel');

class songsController {
    // [GET] /songs
    show(req, res) {
        songsData.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err)) 
    }
    
    // [Get] /songs/:id
    showOne(req, res) {
        songsData.find({ _id: req.body._id })
            .then(data => res.json(data))
            .catch(err => res.json(err)) 
    }

}

module.exports = new songsController(); 
