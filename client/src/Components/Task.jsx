import check from "../icons/circle-check-solid.svg";
import { useNavigate } from "react-router";

function Task({ data }) {
  const { task, desc, time, id } = data;

  const navigate = useNavigate();
  const handleClick = (id) => {
    localStorage.setItem("id", id);
    navigate("/update");
  };
  return (
    <div className="flex  m-[.3rem] mx-3 rounded-lg  justify-between bg-[#2D899C] bg-opacity-30 py-2 items-center ">
      <div
        className="flex flex-col p-4 py-1 text-white bg flex-1 "
        onClick={() => handleClick(id)}
        on
      >
        <h2 className="text-sm task font-semibold">{task}</h2>
        <span className="text-xs font-light font-mono">{desc}</span>
        <span className="text-xs font-light font-mono mt-2">{time}</span>
      </div>
      <div className="m-4">
        <span className="">
          <img src={check} className="h-4 opacity-60" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Task;
