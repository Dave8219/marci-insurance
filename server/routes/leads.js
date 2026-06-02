const express = require("express");
const router = express.Router();

const {
  getAllLeads,
  createLead,
  deleteLead,
  updateLead,
  updateLeadNote,
} = require("../controllers/leads.js");

router.route("/leads").get(getAllLeads);
router.route("/create-lead").post(createLead);
router.route("/delete-lead/:id").delete(deleteLead);
router.route("/update-lead/:id").patch(updateLead);
router.route("/update-lead-note/:id").patch(updateLeadNote);

module.exports = router;
