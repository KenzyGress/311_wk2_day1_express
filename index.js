const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
var userCounter = users.length;

const { users } = require("./state");

/* BEGIN - create routes here */
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json(users[0]);
});

app.post("/users/", (req, res) => {
  let newUser = {
    _id: 6,
    name: "Greg",
    occupation: "Frog Hunter",
    avatar:
      "https://sketchok.com/images/articles/01-cartoons/015-over-the-garden-wall/05/10.jpg"
  };
  users.push(newUser);
  res.json(users);
});

app.put("/users/1", (req, res) => {
  users[0].occupation = "Speed Racer";
  res.json(users);
});

app.delete("/users/1", (req, res) => {
  users[0]._id = null;
  res.send("DELETED");
});

app.post("/users", (req, res) => {
  let newId = {
    _id: userCounter + 1,
    body: req.body
  };

  res.json(newId);
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
