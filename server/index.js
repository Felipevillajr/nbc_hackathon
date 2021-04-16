const express = require("express");
const app = express();
const SERVER_PORT = 8080;
const projectRoute = require("./routes/projectsRoutes.js");

app.use(express.json());

//get all data
app.use("/", projectRoute);

app.listen(SERVER_PORT, () => {
  console.log("server is live on port 8080");
});
