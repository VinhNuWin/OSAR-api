const { ObjectId } = require("mongodb");
const Elderly = require("../models/Elderly");
const db = require("./db");
const mongoose = require("mongoose");

const getAllElderly = async (req, res) => {
  const elderly = await Assailant.find({});

  res.status(200).json(elderly);
};

const getElderly = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const elderly = await Elderly.findById(id);

  if (!elderly) {
    return res.status(404).json({ error: "No such elderly" });
  }

  res.status(200).json(elderly);
};

const createElderly = async (req, res) => {
  let registryType = req.body.registryType;
  let registryReport = {
    registryType: req.body.registryType,
    registryId: req.body.registryReport.registryId,
    date: req.body.registryReport.date,
    fullName: req.body.registryReport.fullName,
    incidentAddress: req.body.registryReport.incidentAddress,
    detailsOfIncident: req.body.registryReport.detailsOfIncident,
    assailantsFullName: req.body.registryReport.peopleInvolved,
    relationshipToReporter: req.body.registryReport.relationshipToReporter,
    additionalIncidentsOfAbuse:
      req.body.registryReport.additionalIncidentsOfAbuse,
    concerningThreatsOrActions:
      req.body.registryReport.concerningThreatsOrActions,
    witnesses: req.body.registryReport.witnesses,
    evidence: req.body.registryReport.evidence,
    otherPeopleAtRisk: req.body.registryReport.otherPeopleAtRisk,
    currentLivingSituationSafe:
      req.body.registryReport.currentLivingSituationSafe,
  };

  try {
    const elderlyReport = await Elderly.create({
      registryReport,
      registryType,
    });
    res.status(201).send({ status: "OK", data: elderlyReport });
    console.log(res.body);
  } catch (error) {
    res.status(200).json(error);
  }
};

const updateElderly = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such elderly" });
  }

  const elderly = await Incident.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(elderly);

  if (!elderly) {
    return res.status(400).json({ error: "No such elderly" });
  }
};

module.exports = { getAllElderly, createElderly, updateElderly, getElderly };
