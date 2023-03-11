import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTasks } from "../Context/store";

function SubTasks() {
  const { state } = useTasks();
  const id = localStorage.getItem("id");
  const [subTasks, setSubTasks] = useState([]);
  const [subtask, setSubTask] = useState("");

  useEffect(() => {
    if (state[id]) {
      setSubTasks(state[id].subTasks);
    }
  }, [state]);

  const alreadyAdded = (task) => {
    return !!subTasks.find(({ subTask }) => subTask === task);
  };

  alreadyAdded(subtask);

  const addSubtask = () => {
    if (subtask && !alreadyAdded(subtask))
      axios
        .post(`http://localhost:4001/tasks/${id}/subtasks`, {
          subTask: subtask,
        })
        .then((res) => {
          if (res.status === 201) {
            // console.log(res.data);
            // dispatch({ type: "ADD_SUB_TASK", payload: { tid: id, subtask: res.data } });
            setSubTasks((prevTasks) => [...prevTasks, res.data]);
            // console.log(subTasks);
          }
        });
  };

  return (
    <div className="flex flex-col w-full m-4 ">
      <div>
        <span>Subtasks</span>

        {!subTasks.lenght &&
          subTasks.map(({ stid, subTask }) => {
            // console.log(task);
            return <div key={stid}>{subTask}</div>;
          })}
      </div>
      <div className="flex w-full ">
        <div className="flex items-center bg-blue-50 bg-opacity-20 rounded-lg w-full">
          <input
            className="my-1 p-2 w-full bg-transparent text-[.86rem] text-white outline-none placeholder-slate-400"
            type="text"
            placeholder="add subtask"
            onChange={(e) => {
              setSubTask(e.target.value);
            }}
          />
          <div className="px-5">
            <button className="bg-blue-300 font-extrabold text-2xl px-5 rounded-full" onClick={addSubtask}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTasks;
