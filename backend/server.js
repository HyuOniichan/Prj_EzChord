require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// instance
const app = express();

// middleware
app.use(cors());

// router 
const route = require('./routes/'); 
route(app); 

// connect db 
mongoose.connect(process.env.MONGODB_URL) 
    .then(() => console.log('Connected to database'))
    .catch(error => console.log(error)) 
    
// listen 
app.listen(process.env.PORT, () => {
    console.log(`Running at port ${process.env.PORT}`);
})
