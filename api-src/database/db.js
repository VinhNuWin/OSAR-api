const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("mongoDB connected")
    })
    
    .catch((error) => {
        console.log('not connected to mongodb server')
    })    
