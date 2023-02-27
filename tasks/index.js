const express = require("express");
const cors = require("cors");
const randomBytes = require("crypto").randomBytes;
const PORT = 4000; // task service port

const app = express();

app.use(cors());
app.use(express.json());

const tasks = {};

app.post("/tasks", (req, res) => {
  const task = req.body.data;

  const id = randomBytes(7).toString("hex");
  tasks[id] = { id: id, ...task };
  res.status(201).send(tasks[id]);
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(PORT, () => {
  console.log("Tasks Service listeing on port 4000");
});
