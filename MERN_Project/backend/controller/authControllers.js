const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return res.status(400).send("email already exisiting");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await Users.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "user created successfully" });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "user not exists" });
    }
    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
      return res.status(400).send("Invalid Credentials");
    }
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token, message: "Login Successful" });
  } catch (err) {
    res.status(500).send(err);
  }
};
