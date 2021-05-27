const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT);

console.log("localhost:3333")