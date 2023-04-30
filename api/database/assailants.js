const { ObjectId } = require('mongodb');
const Assailant = require('../models/Assailant');
const db = require('./db');
const mongoose = require('mongoose');

const getAllAssailants = async(req, res) => {
    const assailant = await Assailant.find({})
    
    res.status(200).json(assailant);
};

const getAssailant = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const assailant = await Assailant.findById(id)

    if (!assailant) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(assailant)
};

const createAssailant = async (req,res) => {
    const {assailantsGender, userId, assailantsRaceEthnicity, assailantsName, streetAddress, assailantsWork, city, state, zipcode, assailantPhone, assailantsEmail, assailantsDefiningCharacteristics} = req.body.assailant;
    console.log('createAssailant reached');

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'No such incident'})
    }
        const assailantReport = await Assailant.create({assailantsGender, userId, assailantsRaceEthnicity, assailantsName, streetAddress, assailantsWork, city, state, zipcode, assailantPhone, assailantsEmail, assailantsDefiningCharacteristics})
        res.status(201).send({ status: 'OK', data: assailantReport });
        console.log(req.body);
    
    if (!assailantReport) {
        res.status(200).json(assailantReport)
    }
};

const updateAssailant = async (req,res) => {
    const {id} = req.params;
    try{
    const updateAssailant = await Assailant.findByIdAndUpdate(id);
        res.send(updateAssailant);
        console.log(updateAssailant);
    }catch (err){
        console.log(err);
    }

    console.log('PUT endpoint reached');
    console.log(id);
    console.log(req.body);
    console.log(req.params)

};

module.exports = { getAllAssailants, createAssailant, updateAssailant, getAssailant };