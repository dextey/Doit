import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TaskPage from "./Pages/TaskPage";
import { useEffect, useState } from "react";
function App() {
  const [Tasks, setTasks] = useState([
    {
      task: "Add to github",
      desc: "commit an open source project",
      date: "12/12/12",
    },
  ]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage Tasks={Tasks} />} />
        <Route
          path="/add"
          element={<TaskPage Tasks={Tasks} setTasks={setTasks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
