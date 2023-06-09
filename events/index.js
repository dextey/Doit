const express = require("express");
const axios = require("axios");

const PORT = 4005; // Event service running at port 4005

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const events = req.body;
  console.log(events.type);
  axios.post("http://task-cl-srv:4000/events", events).catch((err) => console.log("Tasks service Down"));
  axios.post("http://subtasks-srv:4001/events", events).catch((err) => console.log("Sub-Task service Down"));
  axios.post("http://query-srv:4002/events", events).catch((err) => console.log("Query service Down"));

  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Event service running at port ${PORT}`);
});
