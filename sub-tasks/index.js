const express = require("express");
const cors = require("cors");
const randomBytes = require("crypto").randomBytes;

const PORT = 4001; // sub-task service port

const app = express();

app.use(cors());
app.use(express.json());

const subtasksByTaskId = {};

app.post("/tasks/:id/subtasks", (req, res) => {
  const tid = req.params.id;
  const { subTask } = req.body;

  const stid = randomBytes(6).toString("hex");

  const subtasks = subtasksByTaskId[tid] || [];

  subtasks.push({ stid, subTask, status: false });

  subtasksByTaskId[tid] = subtasks;
  res.status(201).json(subtasks);
});

app.listen(PORT, () => {
  console.log(`Sub-Task listening on PORT ${PORT}`);
});
