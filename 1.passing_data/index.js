import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const heading = `There are ${
    req.body.fName.length + req.body.lName.length
  } letters in Your name.`;

  res.render(__dirname + "/views/index.ejs", { heading: heading });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
