import React, { createContext, useState, useEffect } from "react";
import GettingData from "./api/GettingData";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    // const refreshToken = async () => {
    //   const res = await axios.get("/user/refresh_token");
    //   setToken(res.data.accesstoken);
    //   setTimeout(() => {
    //     refreshToken();
    //   }, 10 * 60 * 1000);
    // };
    // refreshToken();
  }, []);

  const state = {
    token: [token, setToken],
    GettingData: GettingData(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
