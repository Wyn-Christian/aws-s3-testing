require("express-async-errors");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

const indexRouter = require("./router");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT || PORT}`);
});
