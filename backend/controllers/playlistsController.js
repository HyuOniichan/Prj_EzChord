const playlistsData = require('../models/playlistsModel');

class playlistsController {
    // [GET] /playlists
    show(req, res) {
        playlistsData.find({}).populate('tracks')
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // [Get] /playlists/:id
    showOne(req, res) {
        playlistsData.findOne({ _id: req.params.id }).populate('tracks')
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

}

module.exports = new playlistsController(); 
