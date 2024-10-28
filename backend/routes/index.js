const tracksRoute = require('./tracksRoute');
const playlistsRoute = require('./playlistsRoute'); 

function route(app) {
    app.use('/songs', tracksRoute); 
    app.use('/playlists', playlistsRoute); 
}

module.exports = route; 
