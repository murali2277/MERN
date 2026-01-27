const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const dotenv=require('dotenv')

dotenv.config()
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb Connected Successfully");
  })
  .catch((err) => console.log(err));

app.use('/auth',require('./routes/authRoutes'))

app.listen(4000, () => {
  console.log("Server Running on Backend");
});
