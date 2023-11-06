const user = require("../models/users");
const asyncHandler = require("express-async-handler");
const UserSerivice = {
  // @desc Create new user
  // @route POST /users
  // @access private
  createUser: asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname, companyname, phonenumber } =
      req.body;
    if (
      !email ||
      !password ||
      !firstname ||
      !lastname ||
      !companyname ||
      !phonenumber
    ) {
      res.status(400).json({ message: "All fields are required" });
    }
    // Check if the user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user and save it to database
    const newUser = new user({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      companyname,
      phoneNumber: phonenumber,
      // Add other user properties as needed
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  }),
  // @desc get user
  // @route Get /users
  // @access private
  getUser: asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await user.find().select("-password").lean();

    // If no users
    if (!users?.length) {
      return res.status(400).json({ message: "No users found" });
    }

    res.json(users);
  }),
};
module.exports = UserSerivice;
