const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./Middleware/errroMiddleware");

const  port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(errorHandler);

app.use("/api/users", require("./Routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));

