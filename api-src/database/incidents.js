const { ObjectId } = require('mongodb');
const Incident = require('../models/Incident')
const db = require('./db');
const mongoose = require('mongoose');

const getAllIncidents = async(req, res) => {
    const incident = await Incident.find({})
    
    res.status(200).json(incident);
};

const getIncident = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such incident'})
    }

    const incident = await Incident.findById(id)

    if (!incident) {
        return res.status(404).json({error: 'No such incident'})
    }

    res.status(200).json(incident)
};

const createIncident = async (req,res) => {
    const {date, userId, city, state, streetAddress, wasAlcoholInvolved, wereDrugsInvolved, wasSurvivorAsleepTimeOfIncident, verbalThreatsToSurvivor, resistanceOfferedBySurvivor, detailsOfTheAssault, areasOfSexualContact, useOfWeaponsFromAssailant, useOfRestraintFromAssailant} = req.body.incident;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'No such incident'})
    }
        const incidentReport = await Incident.create({date, userId, city, state, streetAddress, wasAlcoholInvolved, wereDrugsInvolved, wasSurvivorAsleepTimeOfIncident, verbalThreatsToSurvivor, resistanceOfferedBySurvivor, detailsOfTheAssault, areasOfSexualContact, useOfWeaponsFromAssailant, useOfRestraintFromAssailant})
        res.status(201).send({ status: 'OK', data: incidentReport });
        console.log(req.body);
    
    if (!incidentReport) {
        res.status(200).json(incidentReport)
    }
};

const updateIncident = async (req,res) => {
    const {id} = req.params;
    try{
    const updateIncident = await Incident.findById(id);
        res.send(updateIncident);
        console.log(updateIncident);
    }catch (err){
        console.log(err);
    }

    console.log('PUT endpoint reached');
    console.log(id);
    console.log(req.body);
    console.log(req.params)

};

module.exports = { getAllIncidents, createIncident, updateIncident, getIncident };