import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiLogin } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import NavItem from "../utils/NavItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span>
          <TfiHeadphoneAlt />
        </span>
        <h2>Telefon-Agent</h2>
      </div>

      <nav>
        <ul className="side-nav">
          <NavItem icon={<IoHomeOutline />} item="Home" />
          <NavItem icon={<LuLayoutDashboard />} item="Dashboard" />
          <NavItem
            icon={<RiUserSearchLine />}
            item="Kundendaten"
            active={true}
          />
          <NavItem icon={<IoSettingsOutline />} item="Einstellungen" />
          <NavItem icon={<RiAdminLine />} item="Admin-Bereich" />
        </ul>
      </nav>

      <div className="sidebar-account ">
        <a className="login-button">
          <CiLogin /> <span>Einloggen</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
