const express = require("express");
const app = express();
let port = "8080";
app.listen(port, function () {
  console.log("Server is listen to port 8080");
});
app.use(express.json());
let user = {};
app.get("/", (request, response) => {
  response.send("<h1>Hello Get</h1>");
});
app.get("/home", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/user", (req, res) => {
  res.json(user);
});

app.post("/user", (req, res) => {
  user = req.body;
  res.send("Post Update");
});

app.patch("/user", (req, res) => {
  let obj = req.body;
  for (let key in obj) {
    user[key] = obj[key];
  }
  res.json(user);
});

app.delete("/user", (req, res) => {
  user = {};
  res.json(user);
});
app.get("/user/:id", (req, res) => {
  res.json(req.params);
});
