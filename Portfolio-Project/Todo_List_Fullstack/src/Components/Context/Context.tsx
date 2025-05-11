/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const taskContext = React.createContext([]);
export const Context = ({ children }) => {
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
  const baseURL = "http://localhost:8080/api";

  const [tasks, setTasks] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    await axios
      .get(baseURL)
      .then((response) => console.log(response))
      .catch((error) => console.log("error", error))
    //   .finally(()=>{console.log(tasks.mission)})
  };

  const postTask = async () => {
    await axios.post(baseURL + "/post");
  };

  //   const updateTask =async (id:type) => {
  //     await axios.put(baseURL+`/${id}`)
  //   }

  //   const deleteTask = asyne(id)=>{
  //     await axios.delete(`/${id}`)
  //   }

  return (
    <taskContext.Provider
      value={{
        tasks,
        setTasks,
        isEditing,
        setEditing,
        isComplete,
        setComplete,
        getTasks,
        postTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
