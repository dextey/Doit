import React from "react";
import Task from "../Components/Task";
import Navbar from "../Components/Navbar";

import plus from "../icons/plus-solid.svg";
import { Link } from "react-router-dom";

function HomePage({ Tasks }) {
  localStorage.clear();

  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex rounded-full items-center pl-10  gap-2 p-2 m-3 bg-[#236966] bg-opacity-30">
          <span className="font-bold text-[1rem] px-2">Dexter</span>
          <span className="p-[20px] rounded-full bg-yellow-200"></span>
        </div>
      </div>
      <div className="flex justify-between mb-7 items-center m-3 my-2  p-2 py-1">
        <span className="font-bold text-2xl">Today's Journey</span>
        <Link to="/add" className="">
          <img src={plus} className="h-6" alt="" />
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto  h-[600px] ">
        {Tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
      <Navbar />
    </div>
  );
}

export default HomePage;
