import React from "react";

import OfficeIcon from "./OfficeIcon";
const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    list: {
      0: "Add/Remove items",
      1: "Request/Approval",
      2: "create tasks",
    },
    //list: { 0: "Alex", 1: "Bob", 2: "Johny", 3: "Atta" },
  },
  {
    path: "/emptask",
    name: "leaves & holidays ",
    icon: <i className="fas fa-calendar-days"></i>,
    list: {},
  },

  {
    path: "/empleave",
    name: "employee task",
    icon: <i className="fa fa-briefcase" aria-hidden="true"></i>,
    list: {},
  },

  {
    path: "/analytics",
    name: "Analytics",
    icon: <i className="fa-regular fa-clipboard"></i>,
    list: {},
  },
  {
    path: "/comment",
    name: "Comment",
    icon: <i className="fas fa-calendar-days"></i>,
    list: {},
  },
  {
    path: "/product",
    name: "Product",
    icon: <i className="material-icons">settings</i>,
    list: {},
  },
  {
    path: "/productList",
    name: "Product List",
    icon: <i className="material-icons">logout</i>,
    list: {},
  },
];
const Sidelistbar = ({ usingPath }) => {
  return (
    <div className="top p-3">
      <OfficeIcon />
      {menuItem.map((user) => {
        return user.path === window.location.pathname ? (
          <div key={user.path}>
            <h1>My {user.name}</h1>
            <ul>
              {Object.values(user.list)?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Sidelistbar;
