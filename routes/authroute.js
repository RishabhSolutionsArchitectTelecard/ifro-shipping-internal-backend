const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");
const loginLimiter = require("../middleware/logger");

router.route("/").post(loginLimiter, authController.login);

router.route("/refresh").get(authController.refresh);

router.route("/logout").post(authController.logout);

module.exports = router;
