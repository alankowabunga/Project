// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import axios from "axios";
import React, { useState, useEffect } from "react";


export const InputContext = React.createContext({});

export const Context = ({ children }) => {


  // 取得 Placeholder input value: 利用解構賦值將兩個屬性放入一個變數當作 Context 的 value。
  const [input, setInput] = useState("");

  // 資料、取得資料的 axios 方法、preloader's load state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ShowError,setShowError] = useState(false);


  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

  const getData = async () => {
    await axios
      .get("http://34.229.238.216:8080/api/users")
      .then((reponse) => {
        setData(reponse.data);
      })
      .catch((ShowError) => {
        console.log('資料請求發生錯誤：', ShowError);
        setShowError(true);
      })
      .finally(() => {
        // 資料請求完成後關閉預載動畫
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [])

  return (
    <InputContext.Provider value={{ input, setInput, data, setData, loading,ShowError ,setShowError,getData}}>
      {children}
    </InputContext.Provider>
  )
}
