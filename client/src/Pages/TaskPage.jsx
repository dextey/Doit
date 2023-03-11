import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubTasks from "../Components/SubTasks";
import { useTasks } from "../Context/store";
import left from "../icons/angle-left-solid.svg";
import trash from "../icons/trash-solid.svg";

function TaskPage() {
  const { state, dispatch } = useTasks();
  const id = localStorage.getItem("id");
  const task = id && state[id];

  const deleteTask = () => {
    console.log(id);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex mx-6 py-10 p-2 justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link to="/">
            <img src={left} alt="" className="h-5 " />
          </Link>
          <span className="font-semibold text-1xl font-mono">Finish what you start</span>
        </div>
        {task && (
          <span
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            <img src={trash} alt="" className="h-5 opacity-40" />
          </span>
        )}
      </div>

      <div className=" flex flex-col flex-grow  rounded-md mx-4 p-1  ">
        <Form updatetask={task} dispatch={dispatch} id={id} />
      </div>
    </div>
  );
}

export default TaskPage;

const Form = ({ updatetask, dispatch }) => {
  const navigate = useNavigate();

  const [task, setTask] = useState(updatetask ? updatetask.task : null);
  const [desc, setDesc] = useState(updatetask ? updatetask.desc : null);
  const [time, setTime] = useState(updatetask ? updatetask.time : null);
  const [subTasks, setSubTasks] = useState(updatetask ? updatetask.subTasks : []);
  const [done, setDone] = useState(updatetask ? updatetask.done : false);
  const [error, setError] = useState(false);

  const addTask = async () => {
    if (!task || !desc || !time) {
      setError(!error);
    } else {
      setError(false);
      const newTask = {
        task: task,
        desc: desc,
        time: time,
        subTasks: subTasks,
        done: done,
      };
      axios
        .post("http://localhost:4000/tasks", { data: newTask })
        .then((res) => {
          if (res.status === 201) {
            dispatch({
              type: "ADD_TASK",
              payload: { [res.data.id]: res.data },
            });
          }
        })
        .then(() => {
          navigate("/");
        });
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
        subTasks: subTasks,
        done: done,
      };
    }
  };

  return (
    <div className="bg-[#282c3f] flex flex-col h-full my-5  bg-opacity-30 rounded-lg">
      <div className="flex m-4 px-7 flex-col ">
        {error && (
          <div className="text-red-600 bg-red-300 rounded-lg m-3 p-2 px-4">*please fill all the fields</div>
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
        <div className="flex flex-col pb-5">
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
        <hr />
        <SubTasks />
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
    </div>
  );
};
