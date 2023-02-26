import { Routes, Route } from "react-router-dom";
import { TaskProvider } from "./Context/store";
import HomePage from "./Pages/HomePage";
import TaskPage from "./Pages/TaskPage";

function App() {
  return (
    <div className="container mx-auto">
      <TaskProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<TaskPage />} />
          <Route path="/update" element={<TaskPage />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
