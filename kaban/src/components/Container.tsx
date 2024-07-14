import React from "react";
import Page from "./Page";
import { status_list } from "./Constants";

function Container() {
  const initialTasks = [
    { name: "Kaban task manager", status: status_list.inprogress, timeline: "14 July 24" },
    { name: "Linear algebra in ML", status: status_list.inprogress, timeline: "14 July 24" },
    { name: "Algo - fix placement", status: status_list.tasks, timeline: "18 July 24" },
    { name: "Fix Table in POS ", status: status_list.onhold, timeline: "24 July 24" },
  ];
  const [tasks, setTasks] = React.useState(initialTasks);

  return (
    <div className="w-full h-full  flex gap-2 px-4 p-5 bg-[#232634]">
      {Object.values(status_list).map((status, index) => (
        <Page key={index} status={status} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default Container;
