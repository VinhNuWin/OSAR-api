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
    const { registryType, email, userId, date, address, streetAddress, city, state, postal, peopleInvolved, detailsOfIncident, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, actionsTakenSinceIncident, personalAffectFromIncident, additionalComments } = req.body;
    
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //     return res.status(404).json({error: 'No such registry'})
    // }

    try {
        const registry = await Registry.create({ registryType, email, userId, date, address, streetAddress, city, state, postal, peopleInvolved, detailsOfIncident, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, actionsTakenSinceIncident, personalAffectFromIncident, additionalComments})
        res.status(201).send({ status: 'OK', data: registry });
        console.log(req.body);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const updateRegistry = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such registry'})
    }

    const registry = await Registry.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    res.status(200).json(registry);
    
    if(!registry) {
        return res.status(400).json({error: "No such registry"})
    }
};

module.exports = { getAllRegistries, createRegistry, updateRegistry, getRegistry };