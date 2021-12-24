const express = require("express");
const path = require("path");
const formidable = require("express-formidable");
const fs  = require("fs");
const port = process.env.PORT || 3000;

const app = express();
app.use(formidable());

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.on("data", (chunk) => {
      console.log(chunk);
  })
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
    const data = JSON.stringify(req.fields);
    console.log(data)
    fs.writeFile(path.join(__dirname, "data.txt"), data, ()=> {
        console.log("saved");
    })
console.log(req.fields)
  });

// app.get("/post", (req, res)) => {
  
// }

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});