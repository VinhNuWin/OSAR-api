const { ObjectId } = require('mongodb');
const SexualAssault = require('../models/SexualAssault');
const db = require('./db');
const mongoose = require('mongoose');

const getAllSexualAssault = async(req, res) => {
    const employee = await Assailant.find({})
    
    res.status(200).json(employee);
};

const getSexualAssault = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const sexualAssault = await SexualAssault.findById(id)

    if (!employee) {
        return res.status(404).json({error: 'No such employee'})
    }

    res.status(200).json(employee)
};

const createSexualAssault = async (req,res) => {
    const { registryReport, registryId, registryType, fullName, date, address, alcoholInvolved, drugsInvolved, wasSurvivorAsleep, verbalThreats, resistanceOffered, detailsOfIncident, evidence, useOfWeapons, useOfRestraints, assailantGender, raceEthnicity, assailantsFullName, survivorsFullName, survivorGender, additionalSupportNeeded } = req.body;
    console.log('createSexualAssault reached');

    try{
        const sexualAssaultReport = await SexualAssault.create({ registryReport, registryId, registryType, fullName, date, address, alcoholInvolved, drugsInvolved, wasSurvivorAsleep, verbalThreats, resistanceOffered, detailsOfIncident, evidence, useOfWeapons, useOfRestraints, assailantGender, raceEthnicity, assailantsFullName, survivorsFullName, survivorGender, additionalSupportNeeded })
        res.status(201).send({ status: 'OK', data: sexualAssaultReport });
        console.log(sexualAssaultReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateSexualAssault = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such employee'})
    }

    const sexualAssault = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(sexualAssault);

    if (!sexualAssault) {
        return res.status(400).json({error: 'No such employee'})
    }
};

module.exports = { getAllSexualAssault, createSexualAssault, updateSexualAssault, getSexualAssault };