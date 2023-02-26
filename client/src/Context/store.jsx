import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const TaskContext = createContext({});

export function TasksData() {
  const updateData = (state, action) => {
    switch (action.type) {
      case "LOAD_TASK":
        return { ...state, ...action.payload };
      case "ADD_TASK":
        return { ...state, ...action.payload };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(updateData, {});

  useEffect(() => {
    axios.get("http://localhost:4000/tasks").then((res) => {
      dispatch({ type: "LOAD_TASK", payload: res.data });
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
