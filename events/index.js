const express = require("express");
const axios = require("axios");

const PORT = 4005; // Event service running at port 4005

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const events = req.body;
  console.log(events.type);
  axios.post("http://localhost:4000/events", events).catch((err) => console.log("Tasks service Down"));
  axios.post("http://localhost:4001/events", events).catch((err) => console.log("Sub-Task service Down"));
  axios.post("http://localhost:4002/events", events).catch((err) => console.log("Query service Down"));

  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Event service running at port ${PORT}`);
});
