import React from "react";
import Task from "../Components/Task";

function HomePage({ Tasks }) {
  return (
    <div className="pt-3">
      <div className="flex flex-col   ">
        {Tasks.map((task) => {
          console.log(task);
          return <Task key={Date.now} task={task} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
