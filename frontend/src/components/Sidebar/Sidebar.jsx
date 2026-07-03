import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPen,
  FaImage,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>CreatorOS</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard">
            <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/ai-writer">
            <FaPen /> AI Script Writer
          </NavLink>
        </li>

        <li>
          <NavLink to="/thumbnail">
            <FaImage /> Thumbnail Generator
          </NavLink>
        </li>

        <li>
          <NavLink to="/planner">
            <FaCalendarAlt /> Content Planner
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog /> Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;