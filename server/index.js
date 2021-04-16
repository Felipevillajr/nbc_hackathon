const express = require("express");
const app = express();
const SERVER_PORT = 8080;
const nbcData = require("./data/data.json");

app.use(express.json());

// app.use("/data", nbcData);

app.listen(SERVER_PORT, () => {
  console.log("server is live on port 8080");
});
