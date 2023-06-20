const { ObjectId } = require('mongodb');
const Registry = require('../models/Registry')
const db = require('./db');
const mongoose = require('mongoose');

const getAllRegistries = async(req, res) => {
    const users = await Registry.find({})
    
    res.status(200).json(registries);
};

const getRegistry = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such registry'})
    }

    const registry = await Registry.findById(id)

    if (!registry) {
        return res.status(404).json({error: 'No such registry'})
    }

    res.status(200).json(registry)
};

const createRegistry = async (req,res) => {
    const { email, userId, date, address, streetAddress, city, state, postal, peopleInvolved, detailsOfIncident, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, actionsTakenSinceIncident, personalAffectFromIncident, additionalComments } = req.body;
    
    try {
        const registry = await Registry.create({email, userId, date, address, streetAddress, city, state, postal, peopleInvolved, detailsOfIncident, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, actionsTakenSinceIncident, personalAffectFromIncident, additionalComments})
        res.status(201).send({ status: 'OK', data: registry });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const updateRegistry = async (req,res) => {
    const {id} = req.params;
    try{
    const updateRegistry = await Registry.findById(id);
        res.send(updateRegistry);
        console.log(updateRegistry);
    }catch (err){
        console.log(err);
    }

    console.log('PUT endpoint reached');
    console.log(id);
    console.log(req.body);
    console.log(req.params)
};

module.exports = { getAllRegistries, createRegistry, updateRegistry, getRegistry };