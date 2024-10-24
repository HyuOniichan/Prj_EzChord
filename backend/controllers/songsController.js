const songsData = require('../models/songsModel');

class songsController {
    show(req, res) {
        songsData.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err)) 
    }
}

module.exports = new songsController(); 
