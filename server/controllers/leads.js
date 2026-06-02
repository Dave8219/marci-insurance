const { pool } = require("../db.js");

// user logs in to see all leads
const getAllLeads = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM leads");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// client creates lead info in the form
const createLead = async (req, res) => {
  try {
    const { name, email, phone, insurance_type } = req.body;

    const [result] = await pool.execute(
      `INSERT INTO leads (name, email, phone, insurance_type) VALUES (?, ?, ?, ?)`,
      [name, email, phone, insurance_type],
    );
    const [newLead] = await pool.query(`SELECT * FROM leads WHERE id = ?`, [
      result.insertId,
    ]);
    res.status(201).json(newLead[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// user can delete a lead
const deleteLead = async (req, res) => {
  try {
    const [result] = await pool.execute(`DELETE FROM leads WHERE id = ?`, [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "lead not found" });
    }
    return res.status(200).json({ message: "lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// user can edit a lead

const updateLead = async (req, res) => {
  try {
    const { name, email, phone, insurance_type } = req.body;

    const update = await pool.execute(
      `UPDATE leads SET name = ?, email = ?, phone = ?, insurance_type = ? WHERE id = ?`,
      [name, email, phone, insurance_type, req.params.id],
    );

    if (update.affectedRows === 0) {
      return res.status(404).json({ message: "update not successful" });
    }
    return res.status(200).json({ message: "lead updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

// user can include a note or message on the lead

const updateLeadNote = async (req, res) => {
  try {
    const { admin_note } = req.body;
    const [update] = await pool.execute(
      `UPDATE leads SET admin_note = ? WHERE id = ?`,
      [admin_note, req.params.id],
    );
    if (update.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "note not working. please try again later." });
    }

    return res.status(200).json({
      message: "note updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllLeads,
  createLead,
  deleteLead,
  updateLead,
  updateLeadNote,
};
