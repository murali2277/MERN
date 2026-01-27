const express = require("express");
const router = express.Router();

const { register } = require("../controllers/authControllers");

router.post("/register", register);
router.get("/api", (req, res) => {
    res.send("Hi Hello");
});
module.exports = router;
