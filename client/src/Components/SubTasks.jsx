import React, { useState } from "react";
import axios from "axios";

function SubTasks({ id, subTasks, setSubTasks }) {
  console.log(subTasks);
  const [subtask, setSubTask] = useState("");
  const addSubtask = () => {
    if (subtask)
      axios
        .post(`http://localhost:4001/tasks/${id}/subtasks`, {
          subTask: subtask,
        })
        .then((res) => {
          if (res.status === 201) {
            setSubTasks(...res.data);
            console.log(res.data);
          }
        });
  };

  return (
    <div className="flex flex-col w-full m-4 ">
      <div>
        <span>Subtasks</span>
        {/* {subTasks.map((task) => {
          console.log(task);
          return <div>asdf</div>;
        })} */}
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
            <button
              className="bg-blue-300 font-extrabold text-2xl px-5 rounded-full"
              onClick={addSubtask}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTasks;
