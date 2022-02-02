import Navbar from "./Components/Navbar";
import Task from "./Components/Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-3">
        <div className="flex flex-col pt-16  ">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
