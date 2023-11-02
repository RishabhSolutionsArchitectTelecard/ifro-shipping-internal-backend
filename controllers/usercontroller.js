const UserService = require("../services/userservice");
const asyncHandler = req("express-async-handler");
const UserController = {
  // @desc create user
  // @route POST /user
  // @access Private
  createUser: async (req, res) => {},

  updateUser: async (req, res) => {
    const userId = req.params.id; // Assuming user ID is in the request params
    const userData = req.body; // Assuming updated user data is sent in the request body
    try {
      const updatedUser = await UserService.updateUser(userId, userData);
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id; // Assuming user ID is in the request params
    try {
      const deletedUser = await UserService.deleteUser(userId);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = UserController;
