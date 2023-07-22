const { ObjectId } = require("mongodb");
const Assault = require("../models/Assault");
const db = require("./db");
const mongoose = require("mongoose");

const getAllAssault = async (req, res) => {
  const employee = await Assailant.find({});

  res.status(200).json(employee);
};

const getAssault = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const assault = await Assault.findById(id);

  if (!assault) {
    return res.status(404).json({ error: "No such employee" });
  }

  res.status(200).json(assault);
};

const createAssault = async (req, res) => {
  let registryType = req.body.registryType;
  let registryReport = {
    registryType: req.body.registryType,
    registryId: req.body.registryReport.registryId,
    fullName: req.body.registryReport.fullName,
    date: req.body.registryReport.date,
    incidentAddress: req.body.registryReport.address,
    alcoholInvolved: req.body.registryReport.alcoholInvolved,
    drugsInvolved: req.body.registryReport.drugsInvolved,
    wasSurvivorAsleep: req.body.registryReport.wasSurvivorAsleep,
    verbalThreats: req.body.registryReport.verbalThreats,
    resistanceOffered: req.body.registryReport.resistanceOffered,
    detailsOfIncident: req.body.registryReport.detailsOfIncident,
    areasAssaulted: req.body.registryReport.areasAssaulted,
    evidence: req.body.registryReport.evidence,
    useOfWeapons: req.body.registryReport.useOfWeapons,
    useOfRestraints: req.body.registryReport.useOfRestraints,
    assailantGender: req.body.registryReport.assailantGender,
    raceEthnicity: req.body.registryReport.raceEthnicity,
    assailantsFullName: req.body.registryReport.assailantsFullName,
    survivorGender: req.body.registryReport.survivorGender,
  };

  try {
    assaultReport = await Assault.create({ registryReport, registryType });
    res.status(201).send({ status: "OK", data: assaultReport });
    console.log(assaultReport);
  } catch (error) {
    res.status(200).json(error);
  }
};

const updateAssault = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such employee" });
  }

  const assault = await Incident.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(assault);

  if (!assault) {
    return res.status(400).json({ error: "No such employee" });
  }
};

module.exports = { getAllAssault, createAssault, updateAssault, getAssault };
