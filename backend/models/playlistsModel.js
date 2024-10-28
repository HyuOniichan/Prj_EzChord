const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    title: { type: String },
    description: { type: String },
    image: { type: String },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }], 
}, {
    timestamps: true
})

module.exports = mongoose.model('Playlist', playlistsSchema);
