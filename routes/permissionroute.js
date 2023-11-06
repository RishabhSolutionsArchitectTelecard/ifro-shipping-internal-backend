const express = require("express");
const router = express.Router();
const PermissionController = require("../controllers/permissioncontroller");

// Routes for managing permissions
router.post("/permissions", PermissionController.createPermission);
router.get("/permissions/:roleId", PermissionController.getPermissionsByRoleId);
router.put(
  "/permissions/:permissionId",
  PermissionController.updatePermissionById
);
router.delete(
  "/permissions/:permissionId",
  PermissionController.deletePermissionById
);

module.exports = router;
