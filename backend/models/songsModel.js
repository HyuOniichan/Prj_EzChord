const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    author: { type: String },
    lyrics: { type: String }
}, {
    timestamps: true 
})

module.exports = mongoose.model('Song', songsSchema);
