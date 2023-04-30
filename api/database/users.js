const { ObjectId } = require('mongodb');
const User = require('../models/User')
const db = require('./db');
const mongoose = require('mongoose');

const getAllUsers = async(req, res) => {
    const users = await User.find({})
    
    res.status(200).json(users);
};

const getUser = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
};

const createUser = async (req,res) => {
    const { email } = req.body;
    
    try {
        const user = await User.create({email})
        res.status(201).send({ status: 'OK', data: user });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const updateUser = async (req,res) => {
    const {id} = req.params;
    try{
    const updateUser = await User.findById(id);
        res.send(updateUser);
        console.log(updateUser);
    }catch (err){
        console.log(err);
    }

    console.log('PUT endpoint reached');
    console.log(id);
    console.log(req.body);
    console.log(req.params)

};

module.exports = { getAllUsers, createUser, updateUser, getUser };