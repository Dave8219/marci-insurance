const express = require("express");
const router = express.Router();

const getAllLeads = require("../controllers/leads.js");

router.route("/leads").get(getAllLeads);

module.exports = router;
