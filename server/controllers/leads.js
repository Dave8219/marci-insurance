const { pool } = require("../db/connect.js");
const { sendLeadEmail } = require("../utils/leadMail.js");

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
  console.log("REQ BODY:", req.body);
  const clean = (val) => (val?.trim() ? val : null);
  try {
    const {
      status = "new",
      name,
      email,
      phone,
      insurance_type = null,
      admin_note = null,
      message = null,
    } = req.body;

    const clean = (val) => (val?.trim() ? val : null);

    const values = [
      status,
      name,
      email,
      phone,
      insurance_type,
      admin_note,
      message,
    ];

    const [result] = await pool.execute(
      `INSERT INTO leads (status, name, email, phone, insurance_type, admin_note, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      values,
    );
    const [newLead] = await pool.query(`SELECT * FROM leads WHERE id = ?`, [
      result.insertId,
    ]);

    // Only send an email for public submissions
    /*
    if (!req.user) {
      await sendLeadEmail({
        name,
        email,
        phone,
        insurance_type,
        message,
      });
    }
*/
    await sendLeadEmail({ name, email, phone, insurance_type, message });

    res.status(201).json(newLead[0]);
  } catch (err) {
    console.error("CREATE LEAD ERROR FULL:", err);
    res.status(500).json({
      message: err.message,
      sqlMessage: err.sqlMessage,
    });
  }
};

// create lead - admin
const createAdminLead = async (req, res) => {
  try {
    const {
      status = "new",
      name,
      email,
      phone,
      insurance_type,
      admin_note = null,
      message = null,
    } = req.body;

    const values = [
      status,
      name,
      email,
      phone,
      insurance_type,
      admin_note,
      message,
    ];

    const [result] = await pool.execute(
      `INSERT INTO leads
      (status, name, email, phone, insurance_type, admin_note, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      values,
    );

    const [newLead] = await pool.query(`SELECT * FROM leads WHERE id = ?`, [
      result.insertId,
    ]);

    res.status(201).json(newLead[0]);
  } catch (err) {
    console.error("CREATE ADMIN LEAD ERROR:", err);

    res.status(500).json({
      message: err.message,
      sqlMessage: err.sqlMessage,
    });
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
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// delete leads in bulk

const bulkDeleteLeads = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || ids.length === 0) {
      return res.status(400).json({
        message: "No lead IDs provided",
      });
    }

    // Create placeholders (?, ?, ?) based on number of IDs
    const placeholders = ids.map(() => "?").join(",");

    const [result] = await pool.execute(
      `DELETE FROM leads WHERE id IN (${placeholders})`,
      ids,
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "No leads found to delete",
      });
    }

    return res.status(200).json({
      message: `${result.affectedRows} leads deleted successfully`,
    });
  } catch (error) {
    console.error("Bulk delete error:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

// user can edit a lead

const updateLead = async (req, res) => {
  try {
    const { status, name, email, phone, insurance_type, admin_note } = req.body;

    const update = await pool.execute(
      `UPDATE leads SET status = ?, name = ?, email = ?, phone = ?, insurance_type = ?, admin_note = ? WHERE id = ?`,
      [status, name, email, phone, insurance_type, admin_note, req.params.id],
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
  createAdminLead,
  deleteLead,
  bulkDeleteLeads,
  updateLead,
  updateLeadNote,
};
