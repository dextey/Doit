function Task() {
  return (
    <div className="flex  m-2 mx-3 rounded-lg  justify-between bg-slate-700 py-3 items-center ">
      <div className="flex flex-col p-4 text-white ">
        <h2 className="text-[20px] task font-semibold">
          Add to Github Open Source
        </h2>
        <span className="text-md font-light font-mono">by this friday</span>
      </div>
      <div className="m-4">
        <button className=" text-white font-extrabold bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-full p-2">
          DO
        </button>
      </div>
    </div>
  );
}

export default Task;
