import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TaskPage from "./Pages/TaskPage";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    const snapshot = async () => {
      const data = await getDocs(collection(db, "tasks"));
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    snapshot();
  }, []);

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
