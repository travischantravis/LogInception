const express = require("express");
const { join } = require("path");
const app = express();

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve static html pages
app.get("/", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/level1", (_, res) => {
  res.sendFile(join(__dirname, "level1.html"));
});

app.get("/level2", (_, res) => {
  res.sendFile(join(__dirname, "level2.html"));
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));
