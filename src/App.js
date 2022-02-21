import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import TaskPage from "./Pages/TaskPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route path="/add" element={<TaskPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
