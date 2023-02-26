import fire from "../icons/fire-solid.svg";
import circle from "../icons/circle-notch-solid.svg";
import branch from "../icons/code-branch-solid.svg";

function Navbar() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex p-3 justify-around bg-[#252F40] rounded-[14px] w-11/12 items-center absolute bottom-[1rem] ">
        <span>
          <img src={branch} className="h-6" alt="" />
        </span>
        <span>
          <img src={fire} className="h-6" alt="" />
        </span>
        <span>
          <img src={circle} className="h-6" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
