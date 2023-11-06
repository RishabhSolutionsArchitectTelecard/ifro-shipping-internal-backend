const permissionService = require("../services/permissionservice");

const PermissonController = {
  createPermission: async (req, res) => {
    try {
      const newPermission = await permissionService.createPermission(req.body); // Assuming the request body contains permission data
      res.status(201).json(newPermission);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPermissionsByRoleId: async (req, res) => {
    try {
      const roleId = req.params.roleId;
      const permissions = await permissionService.getPermissionsByRoleId(
        roleId
      );
      res.status(200).json(permissions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatePermissionById: async (req, res) => {
    try {
      const permissionId = req.params.permissionId;
      const updatedPermission = await permissionService.updatePermissionById(
        permissionId,
        req.body
      ); // Assuming the request body contains updated permission data
      res.status(200).json(updatedPermission);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletePermissionById: async (req, res) => {
    try {
      const permissionId = req.params.permissionId;
      const message = await permissionService.deletePermissionById(
        permissionId
      );
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = PermissonController;
