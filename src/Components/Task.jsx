import check from "../icons/circle-check-solid.svg";
import { useNavigate } from "react-router";

function Task({ task }) {
  let navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    localStorage.setItem("id", id);
    navigate("/update");
  };

  return (
    <div
      className="flex  m-[.3rem] mx-3 rounded-lg  justify-between bg-[#2D899C] bg-opacity-30 py-3 items-center "
      onClick={() => handleClick(task.id)}
    >
      <div className="flex flex-col p-4 py-1 text-white ">
        <h2 className="text-[17px] task font-semibold">{task.task}</h2>
        <span className="text-sm font-light font-mono">{task.desc}</span>
        <span className="text-sm font-light font-mono mt-2">{task.time}</span>
      </div>
      <div className="m-4">
        <span className="">
          <img src={check} className="h-6 opacity-60" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Task;
