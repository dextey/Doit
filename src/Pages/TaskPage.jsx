import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import left from "../icons/angle-left-solid.svg";
import trash from "../icons/trash-solid.svg";

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
    <div>
      <div className="flex mx-6 m-4 p-2 justify-between items-center">
        <div className="flex gap-10 items-center">
          <span>
            <img src={left} alt="" className="h-8 " />
          </span>
          <span className="font-semibold text-2xl"> New &lt;/Function&gt;</span>
        </div>
        <span>
          <img src={trash} alt="" className="h-5 opacity-40" />
        </span>
      </div>

      <div className=" flex flex-col  rounded-md m-4 p-1 bg-[#4A6E78] bg-opacity-30 ">
        <div className="flex m-4 flex-col ">
          {/* {error && (
            <div className="text-red-600 bg-red-300 rounded-lg m-3 p-2 px-4">
              *please fill all the fields
            </div>
          )} */}
          <div className="my-2 px-4   rounded-md bg-transparent">
            <input
              className="my-2 p-1 w-full bg-transparent text-[1.4rem] text-white outline-none placeholder-slate-400"
              type="time"
              value="10:10"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <hr className="mb-10" />
          <div className="flex flex-col pb-72">
            <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
              <input
                className="my-3 p-2 w-full  bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
                type="text"
                placeholder="todays mission!"
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
            </div>
            <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
              <input
                className="my-3 p-2 w-full bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
                type="text"
                placeholder="tell me more"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-auto">
          <button
            onClick={addTask}
            className=" w-full  p-3 bg-yellow-200 text-black m-4 mx-24 rounded-md font-bold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
