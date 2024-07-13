import Task from "./Task";

function Page({ status }: { status: string }) {
  return (
    <div className="w-3/12 shadow-xl rounded-xl p-10 h-3/4 flex flex-col ">
      <div className="flex justify-center text-2xl font-extrabold w-full text-gray-400">{status}</div>
      <Task />
    </div>
  );
}

export default Page;
