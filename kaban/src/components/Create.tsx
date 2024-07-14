import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

function Create({ onSubmit }) {
  const [task, setTask] = useState("");

  return (
    <form
      className="flex gap-2 p-2 mt-5 w-full items-center border-gray-600 border-[1px] rounded-lg"
      onSubmit={(e) => {
        onSubmit(e, task);
        setTask("");
      }}
    >
      <input
        className="w-full bg-transparent text-sm border-none text-white focus:outline-none"
        placeholder="add card"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <BiPlusCircle className="text-blue-300" />
    </form>
  );
}

export default Create;
