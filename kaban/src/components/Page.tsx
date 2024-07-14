import { colorMap, status_list } from "./Constants";
import Task from "./Task";
import Create from "./Create";

interface PageProps {
  status: string;
  tasks: {
    name: string;
    status: string;
    timeline: string;
  }[];
}

function Page({ status, tasks, setTasks }: PageProps) {
  tasks = tasks.filter((task) => task.status === status);

  const onDrop = (e) => {
    let id = e.dataTransfer.getData("id");
    setTasks((prev) => {
      let task = prev.find((t) => t.name === id);
      let tasks = prev.filter((t) => t.name !== id);
      task.status = status;

      return [...tasks, task];
    });
  };

  const onSubmit = (e, task, callback) => {
    e.preventDefault();
    if (task) setTasks((prev) => [...prev, { name: task, status: status_list.tasks, timeline: Date.now() }]);
    // callback();
  };

  return (
    <div
      className="w-3/12 shadow-xl rounded-xl p-10   flex flex-col gap-2  h-max page "
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={onDrop}
    >
      <div className={`flex  text-xl font-extrabold w-full ${colorMap[status as keyof typeof colorMap]}`}>
        {status}
      </div>
      <hr className="border-slate-600" />
      <div className="pt-10 flex flex-col gap-2">
        <Task tasks={tasks} />
      </div>
      {status === status_list.tasks && <Create onSubmit={onSubmit} />}
    </div>
  );
}

export default Page;
