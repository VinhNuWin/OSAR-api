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
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such assailant'})
    }

    const assailant = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(assailant);

    if (!incident) {
        return res.status(400).json({error: 'No such assailant'})
    }
};

module.exports = { getAllAssailants, createAssailant, updateAssailant, getAssailant };