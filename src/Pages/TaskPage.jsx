import React, { useState } from "react";

function TaskPage() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(Date.now());

  return (
    <div className="pt-3">
      <div className="flex m-4 flex-col pt-16  ">
        <div className="text-white text-[1.2rem] font-bold m-3">
          Here we go again!
        </div>
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full  bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="text"
            placeholder="todays mission!"
          />
        </div>
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="text"
            placeholder="tell me more"
          />
        </div>
        <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
          <input
            className="my-3 p-3 w-full bg-transparent text-[1.2rem] text-white outline-none placeholder-slate-400"
            type="date"
            placeholder="tell me more"
          />
        </div>
        <div className="flex">
          <button className=" w-full p-3 bg-yellow-200 text-black m-4 rounded-md font-bold">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
