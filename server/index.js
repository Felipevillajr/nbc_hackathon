const express = require("express");
const app = express();
const cors = require("cors");
const SERVER_PORT = 8080;
const projectRoute = require("./routes/projectsRoutes.js");

app.use(express.json());
app.use(cors());

app.use("/", projectRoute);

app.listen(8080, () => {
  console.log("server is live on port 8080");
});
