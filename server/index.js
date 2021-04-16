const express = require("express");
const app = express();
const cors = require("cors");
const nbcData = require("./data/data.json");

app.use(express.json());

app.use(cors());

// app.use("/data", nbcData);

app.use("/api/nbcData", nbcData);

app.listen(8080, () => {
  console.log("server is live on port 8080");
});
