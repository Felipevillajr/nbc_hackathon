const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const fullPath = path.join(__dirname, "../data/data.json");

router.use(express.json());

router.get("/editor", (req, res) => {
  const editorsList = fs.readFileSync(fullPath, "utf8");
  const editorsArr = JSON.parse(editorsList);
  const editorsInfo = editorsArr.filter((item) => {
    return item.id === req.params.id;
  });
  console.log(typeof editorsArr);

  res.json(editorsInfo);
});

module.exports = router;
