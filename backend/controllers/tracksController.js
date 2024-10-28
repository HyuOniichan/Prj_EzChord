const tracksData = require('../models/tracksModel');

class tracksController {
    // [GET] /tracks
    show(req, res) {
        tracksData.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // [Get] /tracks/:id
    showOne(req, res) {
        tracksData.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

}

module.exports = new tracksController(); 
