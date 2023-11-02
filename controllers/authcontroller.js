const AuthService = require("../services/authservice");

const AuthController = {
  login: async (req, res) => {
    try {
      await AuthService.login(req, res);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  refresh: async (req, res) => {
    try {
      await AuthService.refresh(req, res);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      await AuthService.logout(req, res);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = AuthController;
