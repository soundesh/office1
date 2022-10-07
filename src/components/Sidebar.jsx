import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidelistbar from "./Sidelistbar";

const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <i className="material-icons">dashboard</i>,
  },
  {
    path: "/emptask",
    name: "employee task",
    icon: <i className="fa fa-briefcase"></i>,
    list: {},
  },

  {
    path: "/empleave",
    name: "leaves & holidays ",
    icon: <i className="fas fa-calendar-days"></i>,
    list: {},
  },

  {
    path: "/analytics",
    name: "Analytics",
    icon: <i className="fa-regular fa-clipboard"></i>,
  },
  {
    path: "/comment",
    name: "Comment",
    icon: <i className="fas fa-calendar-days"></i>,
  },
];
const menuItem1 = [
  {
    path: "/product",
    name: "Product",
    icon: <i className="material-icons">settings</i>,
  },
  {
    path: "/productList",
    name: "Product List",
    icon: <i className="material-icons">logout</i>,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [usingPath, setUsingPath] = useState();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container1 bg-indigo-800 overflow-y-auto ">
      <div className="sidebar">
        <div>
          {menuItem.map((item, index) => (
            <NavLink
              onClick={() => setUsingPath(item.path)}
              to={item.path}
              key={index}
              className="link"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
        <div className="sidebarSetting">
          {menuItem1.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={() => setUsingPath(item.path)}
              className="link"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
      </div>
      {isOpen ? <Sidelistbar usingPath={usingPath} /> : null}
      <button onClick={toggle} className="sidebarBtn">
        <span className="dash-icon-arrow flex flex-end">
          <i className="material-icons">settings</i>
        </span>
      </button>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
