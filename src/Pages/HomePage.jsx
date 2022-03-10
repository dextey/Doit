import React from "react";
import Task from "../Components/Task";
import Navbar from "../Components/Navbar";

import plus from "../icons/plus-solid.svg";
import { Link } from "react-router-dom";

function HomePage({ Tasks }) {
  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex rounded-full items-center pl-12  gap-2 p-2 m-3 bg-[#236966] bg-opacity-30">
          <span className="font-bold text-[1.3rem] px-2">John</span>
          <span className="p-[20px] rounded-full bg-white"></span>
        </div>
      </div>
      <div className="flex justify-between mb-10 items-center m-3 p-2">
        <span className="font-bold text-3xl">Today's Journey</span>
        <Link to="/add" className="">
          <img src={plus} className="h-7" alt="" />
        </Link>
      </div>
      <div className="flex flex-col   ">
        {Tasks.map((task) => {
          console.log(task);
          return <Task key={Date.now} task={task} />;
        })}
      </div>
      <Navbar />
    </div>
  );
}

export default HomePage;
