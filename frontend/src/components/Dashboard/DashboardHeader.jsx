import "./Dashboard.css";

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <div>
        <h1>Welcome back, Imran 👋</h1>
        <p>Manage your AI tools and create content faster than ever.</p>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="search-input"
        />

        <button className="notification-btn">
          🔔
        </button>

        <div className="user-profile">
          <div className="avatar">
            I
          </div>

          <span>Imran</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;