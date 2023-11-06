const Role = require("../models/roles");
const Permission = require("../models/permission");

const RoleService = {
  // Function to create a new role
  createRole: async (userId, roleName, permissions, value) => {
    try {
      const newRole = new Role({
        userId: userId,
        roleName: roleName,
        permissions: permissions,
        value: value,
      });

      const createdRole = await newRole.save();
      return createdRole;
    } catch (error) {
      throw new Error(`Error creating role: ${error}`);
    }
  },

  // Function to find roles by user ID
  findRolesByUserId: async (userId) => {
    try {
      const roles = await Role.find({ userId: userId }).populate("permissions");
      return roles;
    } catch (error) {
      throw new Error(`Error finding roles: ${error}`);
    }
  },

  // Function to add a permission to a role
  addPermissionToRole: async (roleId, permissionId) => {
    try {
      const role = await Role.findById(roleId);
      if (!role) {
        throw new Error("Role not found");
      }

      role.permissions.push(permissionId);
      await role.save();
      return role;
    } catch (error) {
      throw new Error(`Error adding permission to role: ${error}`);
    }
  },

  // Additional functions related to roles can be added here
};

module.exports = RoleService;
