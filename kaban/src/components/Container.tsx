import Page from "./Page";

function Container() {
  const status_list = ["Tasks", "In Progress", "Done", "On hold"];

  return (
    <div className="w-full h-full  flex gap-2 px-4 p-5">
      {status_list.map((status) => (
        <Page status={status} />
      ))}
    </div>
  );
}

export default Container;
