// const {MongoClient} = require('mongodb')


// const client = new MongoClient(process.env.MONGO_URI)


const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {})
    
    .catch((error) => {
        console.log(error)
    })    
