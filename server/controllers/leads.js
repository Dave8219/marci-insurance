const { pool } = require("../db.js");

const getAllLeads = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM leads");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = getAllLeads;
