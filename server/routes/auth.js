const express = require("express");
const router = express.Router();

const {
  createAccount,
  login,
  logout,
  forgotPassword,
  forgotUsername,
} = require("../controllers/auth.js");

router.route("/create-account").post(createAccount);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/forgot-password").post(forgotPassword);

router.route("/forgot-username").post(forgotUsername);
module.exports = router;
