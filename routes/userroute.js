const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usercontroller");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);
// Route to create a new user
router.post("/", UserController.createUser);

// Route to update an existing user
router.put("/:id", UserController.updateUser);

// Route to delete a user
router.delete("/:id", UserController.deleteUser);

module.exports = router;
