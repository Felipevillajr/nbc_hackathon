const fs = require("fs");
const path = require("path");

const projectsData = path.resolve("../data/data.json");
const projectList = require(projectsData);

const router = require("express").Router();

module.exports = router;
