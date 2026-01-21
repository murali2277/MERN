const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongoodb connect successully"))
  .catch((err) => console.log(err));

app.use('/auth',require('./routes/authRoutes.js')
)

app.use('/tasks',require('./routes/taskRouter.js'))
app.listen(4000, () => {
  console.log("Backen Running in Port 4000");
});
