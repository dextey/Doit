import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function TaskPage({ Tasks, setTasks }) {
  const [task, setTask] = useState(null);
  const [desc, setDesc] = useState(null);
  const [date, setDate] = useState(null);
  const [error, setError] = useState(false);

  const addTask = () => {
    if (!task || !desc || !date) {
      setError(!error);
    } else {
      setError(false);
      const newTask = {
        task: task,
        desc: desc,
        date: date,
      };
      setTasks([...Tasks, newTask]);
    }
  };

  return (
    <div className="pt-3">
      <div className="flex m-4 flex-col pt-16  ">
        <div className="text-white text-[1.2rem] flex item-center font-bold m-3">
          <Link to={"/"} className="text-3xl px-3 mx-3 font-mono">
            &lt;
          </Link>{" "}
          Here we go again!
        </div>
        {error && (
          <div className="text-red-600 bg-red-300 rounded-lg m-3 p-2 px-4">
            *please fill all the fields
          </div>
        )}
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full  bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="text"
            placeholder="todays mission!"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="text"
            placeholder="tell me more"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="date"
            placeholder="tell me more"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <button
            onClick={addTask}
            className=" w-full p-3 bg-yellow-200 text-black m-4 rounded-md font-bold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
