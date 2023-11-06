const RoleServices = require("../services/roleservice");
const roleController = {
  createRole: async (req, res) => {
    try {
      const { userId, roleName, permissions, value } = req.body; // Assuming data is sent via POST request

      const createdRole = await RoleServices.createRole(
        userId,
        roleName,
        permissions,
        value
      );
      res.status(201).json(createdRole); // Send the created role as a JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getRolesByUserId: async (req, res) => {
    try {
      const { userId } = req.params; // Assuming the userId is sent as a parameter

      const roles = await RoleServices.findRolesByUserId(userId);
      res.status(200).json(roles); // Send the roles as a JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addPermissionToRole: async (req, res) => {
    try {
      const { roleId, permissionId } = req.body; // Assuming roleId and permissionId are sent via POST request

      const updatedRole = await RoleServices.addPermissionToRole(
        roleId,
        permissionId
      );
      res.status(200).json(updatedRole); // Send the updated role as a JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other controller functions related to roles can be added here
};

module.exports = roleController;
