import React from "react";
import Task from "../Components/Task";
import Navbar from "../Components/Navbar";

import plus from "../icons/plus-solid.svg";
import { Link } from "react-router-dom";
import { useTasks } from "../Context/store";

function HomePage() {
  const Tasks = useTasks().state;
  localStorage.removeItem("id");

  return (
    <div className="container flex flex-col mx-auto  h-screen ">
      <div className="flex justify-between ">
        <div></div>
        <div className="flex rounded-full items-center pl-7   p-2 m-2 bg-[#236966] bg-opacity-30">
          <span className="font-bold text-[.8rem] px-2">Dexter</span>
          <span className="p-[16px] rounded-full bg-yellow-200"></span>
        </div>
      </div>
      <div className="flex justify-between mb-5 items-center m-3 my-1  p-2 py-1">
        <span className="font-bold text-1xl">Today's Journey</span>
        <Link to="/add" className="">
          <img src={plus} className="h-4" alt="" />
        </Link>
      </div>
      <div className="flex-grow   overflow-y-auto  ">
        <div className="flex flex-col ">
          {Object.keys(Tasks).map((id) => {
            return <Task key={id} data={Tasks[id]} />;
          })}
        </div>
      </div>
      <div className="flex w-full py-5">
        <Navbar />
      </div>
    </div>
  );
}

export default HomePage;
