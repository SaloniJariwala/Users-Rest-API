const express = require("express");
const dotenv = require("dotenv").config();
//const colors = require("colors");
const cors = require("cors");
//const { errorHandler } = require("./Middleware/errroMiddleware");
const connectDB = require("./Config/db");
const  port = process.env.PORT;

connectDB;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
//app.use(errorHandler);

app.use("/api/users", require("./Routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));

