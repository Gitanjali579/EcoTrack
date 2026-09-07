import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calculator,
  SlidersHorizontal,
  Trophy,
  History,
  User,
  Home,
  Leaf
} from "lucide-react";

import "../styles/sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={19} />
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={19} />
    },
    {
      name: "Carbon Calculator",
      path: "/calculator",
      icon: <Calculator size={19} />
    },
    {
      name: "What-If Simulator",
      path: "/simulator",
      icon: <SlidersHorizontal size={19} />
    },
    {
      name: "Challenges",
      path: "/challenges",
      icon: <Trophy size={19} />
    },
    {
      name: "History",
      path: "/history",
      icon: <History size={19} />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={19} />
    }
  ];

  return (
    <aside className="ecotrack-sidebar">

      {/* Sidebar Logo */}
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Leaf size={20} />
        </div>

        <div>
          <span className="fw-bold">Eco</span>
          <span className="fw-bold text-success">Track</span>
        </div>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">

        <p className="sidebar-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Bottom Card */}
      <div className="sidebar-bottom-card">

        <div className="sidebar-card-icon">
          <Leaf size={20} />
        </div>

        <h6>Make an Impact</h6>

        <p>
          Small changes today can create a greener tomorrow.
        </p>

        <NavLink to="/challenges" className="btn btn-success btn-sm w-100">
          Start Challenge
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;