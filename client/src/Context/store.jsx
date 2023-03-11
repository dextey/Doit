import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const TaskContext = createContext({});

export function TasksData() {
  const updateData = (state, action) => {
    switch (action.type) {
      // case "LOAD_TASK":
      //   return { ...state, ...action.payload };
      case "ADD_TASK":
        return { ...state, ...action.payload };
      case "ADD_SUB_TASK":
        const { tid, subtask } = action.payload;
        state[tid]?.subTasks.push(subtask);
        return { ...state };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(updateData, {});

  useEffect(() => {
    axios.get("http://localhost:4002/").then((res) => {
      dispatch({ type: "ADD_TASK", payload: res.data });
    });
  }, []);

  return { state, dispatch };
}

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const tasks = TasksData();
  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
