const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childrenSchema = new Schema(
  {
    registryId: {
      type: String,
      required: false,
    },
    registryType: {
      type: String,
      required: false,
    },
    registryReport: {
      type: Object,
      required: true,
    },
    fullName: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    address: {
      type: Object,
      required: false,
    },
    detailsOfIncident: {
      type: String,
      required: false,
    },
    peopleInvolved: {
      type: String,
      required: false,
    },
    evidence: {
      type: String,
      required: false,
    },
    safePerson: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Children = mongoose.model("ChildrenReport", childrenSchema);
module.exports = Children;
