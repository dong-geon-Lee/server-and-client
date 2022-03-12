const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("../backend/routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
