import React from "react";
import EmployeeSection from "./EmployeeSection";
import Login from "./components/AuthComponent/Login";
import Forgot from "./components/AuthComponent/Forgot";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <EmployeeSection />
    </BrowserRouter>
  );
};

export default App;
