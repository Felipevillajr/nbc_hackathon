const fs = require("fs");
const path = require("path");

//basic route to get all data

const router = require("express").Router();

router.get("/", (req, res) => {
  fs.readFile(path.resolve("./data/data.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error.message);
    }
    console.log(data);
    const nbcData = JSON.parse(data);
    res.json(nbcData);
  });
});

module.exports = router;
