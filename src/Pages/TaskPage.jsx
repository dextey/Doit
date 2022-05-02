import React, { useState } from "react";
import { Link } from "react-router-dom";
import left from "../icons/angle-left-solid.svg";
import trash from "../icons/trash-solid.svg";
import { db } from "../firebaseConfig";
import {
  collection,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "@firebase/firestore";

function TaskPage({ tasks }) {
  const id = localStorage.getItem("id");
  console.log(tasks);
  let task = [0];
  if (tasks) {
    task = tasks.filter((task) => task.id === id);
  }
  console.log(task[0]);

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    window.location = "/";
  };

  return (
    <div>
      <div className="flex mx-6 m-4 p-2 justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link to="/">
            <img src={left} alt="" className="h-5 " />
          </Link>
          <span className="font-semibold text-1xl font-mono">
            Finish what you start
          </span>
        </div>
        {tasks && (
          <span
            onClick={() => {
              deleteTask(task[0].id);
            }}
          >
            <img src={trash} alt="" className="h-5 opacity-40" />
          </span>
        )}
      </div>

      <div className=" flex flex-col  rounded-md m-4 p-1 bg-[#4A6E78] bg-opacity-30 ">
        <Form updatetask={task[0]} />
      </div>
    </div>
  );
}

export default TaskPage;

// const Form = ({ setTask ,setDesc,setTime }) => {
const Form = ({ updatetask }) => {
  // console.log(updatetask && 1);

  const [task, setTask] = useState(updatetask ? updatetask.task : null);
  const [desc, setDesc] = useState(updatetask ? updatetask.desc : null);
  const [time, setTime] = useState(updatetask ? updatetask.time : null);
  const [done, setDone] = useState(updatetask ? updatetask.done : false);
  const [error, setError] = useState(false);

  const addTask = async () => {
    console.log("adding task");
    if (!task || !desc || !time) {
      setError(!error);
    } else {
      setError(false);
      const newTask = {
        task: task,
        desc: desc,
        time: time,
        done: done,
      };

      const result = await setDoc(doc(collection(db, "tasks")), newTask);
      window.location = "/";
    }
  };

  const updateTask = async (id) => {
    console.log("updating task" + id);
    console.log(task, desc, time, done);
    if (!task || !desc || !time) {
      setError(!error);
    } else {
      setError(false);
      const newTask = {
        task: task,
        desc: desc,
        time: time,
        done: done,
      };

      const result = await updateDoc(doc(db, "tasks", id), newTask);
      console.log("====================================");
      console.log(result);
      console.log("====================================");
      window.location = "/";
    }
  };

  return (
    <>
      <div className="flex m-4 flex-col ">
        {error && (
          <div className="text-red-600 bg-red-300 rounded-lg m-3 p-2 px-4">
            *please fill all the fields
          </div>
        )}
        <div className="my-2 px-4   rounded-md bg-transparent">
          <input
            className="my-2 p-1 w-full bg-transparent text-[.9rem] text-white outline-none placeholder-slate-400"
            type="time"
            defaultValue={updatetask ? updatetask.time : null}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <hr className="mb-6" />
        <div className="flex flex-col pb-72">
          <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
            <input
              className="my-1 p-2 w-full  bg-transparent text-[.86rem] text-white outline-none placeholder-slate-400"
              type="text"
              defaultValue={updatetask ? updatetask.task : null}
              placeholder="todays mission!"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>

          <div className="my-2 px-4   rounded-md bg-[#6a7e8f77]">
            <input
              className="my-1 p-2 w-full bg-transparent text-[.86rem] text-white outline-none placeholder-slate-400"
              type="text"
              defaultValue={updatetask ? updatetask.desc : null}
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
          onClick={
            updatetask
              ? () => {
                  updateTask(updatetask.id);
                }
              : addTask
          }
          className=" w-full  p-3 bg-yellow-200 text-black m-4 mx-24 rounded-md font-bold"
        >
          {updatetask ? "Update" : "Add"}
        </button>
      </div>
    </>
  );
};
