const tracksRoute = require('./tracksRoute');
const playlistsRoute = require('./playlistsRoute'); 

function route(app) {
    app.use('/tracks', tracksRoute); 
    app.use('/playlists', playlistsRoute); 
}

module.exports = route; 
