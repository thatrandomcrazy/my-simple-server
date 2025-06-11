const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(Path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(Path.join(__dirname, "public", "about.html"));
});

// start the server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}/`);
});
