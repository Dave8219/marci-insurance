require("dotenv").config();
// require('express-async-errors');
const helmet = require("helmet");
const cors = require("cors");

const { pool } = require("./db.js");

const leads = require("./routes/leads.js");

const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/api/v1", leads);

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
