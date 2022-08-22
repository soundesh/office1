import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <i class="material-icons">dashboard</i>,
    },
    {
      path: "/about",
      name: "About",
      icon: <i class="fa-regular fa-bell"></i>,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <i class="fa-regular fa-clipboard"></i>,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <i class="fas fa-calendar-days"></i>,
    },
  ];
  const menuItem1 = [
    {
      path: "/product",
      name: "Product",
      icon: <i class="material-icons">settings</i>,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <i class="material-icons">logout</i>,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
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
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
