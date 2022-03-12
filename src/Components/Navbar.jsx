import fire from "../icons/fire-solid.svg";
import circle from "../icons/circle-notch-solid.svg";
import branch from "../icons/code-branch-solid.svg";

function Navbar() {
  return (
    <div className="flex w-full  p-4 py-2 absolute bottom-0">
      <div className="flex p-4 justify-around bg-[#252F40] rounded-[20px] w-full items-center  ">
        <span>
          <img src={branch} className="h-7" alt="" />
        </span>
        <span>
          <img src={fire} className="h-7" alt="" />
        </span>
        <span>
          <img src={circle} className="h-7" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
