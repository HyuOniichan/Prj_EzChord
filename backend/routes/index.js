const songsRoute = require('./songsRoute')

function route(app) {
    app.use('/songs', songsRoute); 
}

module.exports = route; 
