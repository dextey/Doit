import check from "../icons/circle-check-solid.svg";

function Task({ task }) {
  return (
    <div className="flex  m-2 mx-3 rounded-lg  justify-between bg-[#2D899C] bg-opacity-30 py-3 items-center ">
      <div className="flex flex-col p-4 text-white ">
        <h2 className="text-[20px] task font-semibold">{task.task}</h2>
        <span className="text-md font-light font-mono">{task.desc}</span>
        <span className="text-md font-light font-mono">{task.date}</span>
      </div>
      <div className="m-4">
        <span>
          <img src={check} className="h-6" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Task;
