const express = require("express");
const cors = require("cors");
const randomBytes = require("crypto").randomBytes;
const axios = require("axios");

const PORT = 4000; // task service port

const app = express();

app.use(cors());
app.use(express.json());

const tasks = {};

app.post("/tasks", (req, res) => {
  const task = req.body.data;

  const id = randomBytes(7).toString("hex");
  tasks[id] = { id: id, ...task };

  axios.post("http://localhost:4005/events", { type: "TASK_CREATED", data: tasks[id] }).catch((err) => {
    console.log("Event service  down");
  });

  res.status(201).send(tasks[id]);
});

app.post("/events", (req, res) => {
  const { type } = req.body;
  console.log(type);
  res.send({});
});

app.listen(PORT, () => {
  console.log("Tasks Service listeing on port 4000");
});
