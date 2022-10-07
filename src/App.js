import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import EmpTask from "./pages/task/EmpTask";
import EmpLeaveSchedule from "./pages/empleavemanage/EmpLeaveSchedule";
import { DataProvider } from "./GlobalState";
const App = () => {
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
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
