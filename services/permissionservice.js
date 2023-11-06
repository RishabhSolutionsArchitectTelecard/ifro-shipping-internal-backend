const PermissionModel = require("../models/permission"); // Replace with the correct path to your Permission model

// Create a new permission
const createPermission = async (permissionData) => {
  try {
    const newPermission = await PermissionModel.create(permissionData);
    return newPermission;
  } catch (error) {
    throw new Error("Error creating permission");
  }
};

// Get permissions based on roleId
const getPermissionsByRoleId = async (roleId) => {
  try {
    const permissions = await PermissionModel.find({ roleId });
    return permissions;
  } catch (error) {
    throw new Error("Error getting permissions by roleId");
  }
};

// Update a permission by ID
const updatePermissionById = async (permissionId, updatedData) => {
  try {
    const updatedPermission = await PermissionModel.findByIdAndUpdate(
      permissionId,
      updatedData,
      { new: true }
    );
    return updatedPermission;
  } catch (error) {
    throw new Error("Error updating permission");
  }
};

// Delete a permission by ID
const deletePermissionById = async (permissionId) => {
  try {
    await PermissionModel.findByIdAndDelete(permissionId);
    return "Permission deleted successfully";
  } catch (error) {
    throw new Error("Error deleting permission");
  }
};

module.exports = {
  createPermission,
  getPermissionsByRoleId,
  updatePermissionById,
  deletePermissionById,
};
