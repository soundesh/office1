import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import EmpTask from "./pages/task/EmpTask";
import EmpLeaveSchedule from "./pages/empleavemanage/EmpLeaveSchedule";
import AssignTask from "./pages/AssignTask/AssignTask";
import { DataProvider } from "./GlobalState";
import HrDashboard from "./Hrpages/HrDashboard/HrDashboard";
import HrAccounts from "./Hrpages/hrAccounts/HrAccounts";
import HrPayments from "./Hrpages/HrPayments/HrPayments";
import HrReports from "./Hrpages/HrReports/HrReports";
import Hrevents from "./Hrpages/Hrevents/Hrevents";
import Hrholidays from "./Hrpages/HrHolidays/Hrholidays";
import Hruser from "./Hrpages/HrUsers/Hruser";
const EmployeeSection = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/emptask" element={<EmpTask />} />

            <Route path="/empleave" element={<EmpLeaveSchedule />} />
            <Route path="/assigntask" element={<AssignTask />} />

            <Route path="/comment" element={<Comment />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />

            {/* hr dashboard*/}
            <Route path="/hrdashboard" element={<HrDashboard />} />
            <Route path="/hraccounts" element={<HrAccounts />} />
            <Route path="/hrholidays" element={<Hrholidays />} />

            <Route path="/hruser" element={<Hruser />} />
            <Route path="/hrpayments" element={<HrPayments />} />
            <Route path="/hrreports" element={<HrReports />} />
            <Route path="/hrevents" element={<Hrevents />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </DataProvider>
  );
};

export default EmployeeSection;
