const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 4002; // Query service running at port 4002

const app = express();

app.use(cors());
app.use(express.json());

const tasks = {};

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log(type);

  if (type === "TASK_CREATED") {
    const { id } = data;
    tasks[id] = data;
  }
  if (type === "SUB_TASK_CREATED") {
    const { tid } = data;
    tasks[tid]?.subTasks.push(data);
  }

  // console.log(tasks);
  res.send({});
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Query service running at port ${PORT}`);
});
