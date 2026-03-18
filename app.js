const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Docker API Running!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from API!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

