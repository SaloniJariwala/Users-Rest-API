const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./Middleware/errroMiddleware");
const connectDB = require("./Config/db");
const  port = process.env.PORT || 3000;

connectDB

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(errorHandler);

app.use("/api/users", require("./Routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));

