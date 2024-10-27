const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referSchema = new Schema({
    text: { type: String }, 
    source: { type: String },
})

const songsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    artist: { type: String },
    lyrics: { type: String },
    refer: [referSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Song', songsSchema);
