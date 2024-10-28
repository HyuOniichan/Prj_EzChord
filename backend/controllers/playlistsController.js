const playlistsData = require('../models/playlistsModel');

class songsController {
    // [GET] /songs
    show(req, res) {
        playlistsData.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // [Get] /songs/:id
    showOne(req, res) {
        playlistsData.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

}

module.exports = new songsController(); 
