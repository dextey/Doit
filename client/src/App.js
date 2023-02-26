import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TaskPage from "./Pages/TaskPage";
import { useEffect, useState } from "react";

function App() {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<HomePage Tasks={Tasks} />} />
        <Route path="/add" element={<TaskPage />} />
        <Route path="/update" element={<TaskPage tasks={Tasks} />} />
      </Routes>
    </div>
  );
}

export default App;
