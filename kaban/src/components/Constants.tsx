import { IoCheckmarkDoneCircleSharp, IoTimeOutline } from "react-icons/io5";
import { RiProgress4Line } from "react-icons/ri";
import { SiTask } from "react-icons/si";

export const status_list = { tasks: "Tasks", inprogress: "In Progress", done: "Done", onhold: "On hold" };

export const colors = {
  blue: "text-[#8caaee]",
  yellow: "text-[#e5c890]",
  green: "text-[#a6d189]",
  red: "text-[#e78284]",
  flamingo: "text-[#eebebe]",
  grey: "text-[#a5adce]",
};

export const colorMap = {
  Tasks: colors.blue,
  "In Progress": colors.yellow,
  Done: colors.green,
  "On hold": colors.grey,
};

export const iconMap = {
  Tasks: <SiTask />,
  "In Progress": <RiProgress4Line />,
  Done: <IoCheckmarkDoneCircleSharp />,
  "On hold": <IoTimeOutline />,
};
