const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {})
    
    .catch((error) => {
        console.log('not connected to mongodb server')
    })    
