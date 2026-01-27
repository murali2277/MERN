const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RegisterUser = require("../models/Users");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await RegisterUser.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await RegisterUser.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({ createdUser, message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
