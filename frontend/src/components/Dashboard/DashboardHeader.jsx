import "./DashboardHeader.css";
import { FaBell, FaSearch } from "react-icons/fa";

function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">

      <div>
        <h1>Welcome back, Imran 👋</h1>
        <p>{today}</p>
      </div>

      <div className="header-right">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="user-profile">
          <div className="avatar">
            I
          </div>

          <div>
            <strong>Imran</strong>
            <p>Creator</p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default DashboardHeader;