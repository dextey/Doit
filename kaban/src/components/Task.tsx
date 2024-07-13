import { HiDotsVertical } from "react-icons/hi";

function Task() {
  return (
    <div className="flex pt-12" draggable>
      <div className="flex gap-4 p-2 px-4 rounded-lg text-gray-700 bg-gray-200 items-center">
        <span>Kanban task manager</span>
        <span>
          <HiDotsVertical />
        </span>
      </div>
    </div>
  );
}

export default Task;
