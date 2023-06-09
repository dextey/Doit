const express = require("express");
const cors = require("cors");
const randomBytes = require("crypto").randomBytes;
const axios = require("axios");
const PORT = 4001; // sub-task service port

const app = express();

app.use(cors());
app.use(express.json());

const subtasksByTaskId = {};

app.post("/tasks/:id/subtasks", async (req, res) => {
  const tid = req.params.id;
  const { subTask } = req.body;

  const stid = randomBytes(6).toString("hex");

  const subtasks = subtasksByTaskId[tid] || [];

  subtasks.push({ stid, subTask, status: false });

  subtasksByTaskId[tid] = subtasks;

  await axios
    .post("http://events-srv:4005/events", {
      type: "SUB_TASK_CREATED",
      data: { stid, subTask, status: false, tid },
    })
    .catch((err) => {
      console.log("Event service  down");
    });

  res.status(201).json({ stid, subTask, status: false });
});

app.post("/events", (req, res) => {
  const { type } = req.body;
  console.log(type);
  res.send({});
});

app.listen(PORT, () => {
  console.log(`Sub-Task listening on PORT ${PORT}`);
});
