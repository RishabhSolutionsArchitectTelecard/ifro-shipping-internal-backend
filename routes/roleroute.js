const express = require("express");
const router = express.Router();
const roleController = require("../controllers/rolecontroller"); // Assuming your controller file is named roleController.js

// Define routes related to roles

// Route to create a role
router.post("/roles", roleController.createRole);

// Route to get roles by userId
router.get("/roles/:userId", roleController.getRolesByUserId);

// Route to add a permission to a role
router.post("/roles/addPermission", roleController.addPermissionToRole);

// You can add more routes for other role-related operations here

module.exports = router;
