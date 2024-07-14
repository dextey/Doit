import { HiDotsVertical } from "react-icons/hi";
import { colorMap, iconMap } from "./Constants";
interface TaskProps {
  tasks: {
    name: string;
    status: string;
    timeline: string;
  }[];
}

function Task({ tasks }: TaskProps) {
  const onDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  return tasks.map((task, index) => {
    return (
      <div
        key={index}
        className="flex cursor-grab text-sm  "
        draggable
        onDragStart={(e) => onDrag(e, task.name)}
      >
        <div className="flex gap-4 p-2 px-4 rounded-lg text-[#c6d0f5] bg-[#303446] items-center">
          <span className={`${colorMap[task.status]}`}>{iconMap[task.status]}</span>
          <span className="pr-10">{task.name}</span>
          <span>
            <HiDotsVertical />
          </span>
        </div>
      </div>
    );
  });
}

export default Task;
