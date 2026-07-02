import { Link } from "react-router-dom";
import {
  FaHome,
  FaPen,
  FaImage,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>CreatorOS</h2>

      <ul className="sidebar-menu">
        <li className="active">
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/ai-writer">
            <FaPen /> AI Script Writer
          </Link>
        </li>

        <li>
          <Link to="/thumbnail">
            <FaImage /> Thumbnail Generator
          </Link>
        </li>

        <li>
          <Link to="/planner">
            <FaCalendarAlt /> Content Planner
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;