import "./Dashboard.css";

function StatsCards() {
  return (
    <div className="dashboard-cards">
      <div className="dashboard-card">
        <h3>📝 Scripts</h3>
        <h2>24</h2>
      </div>

      <div className="dashboard-card">
        <h3>🎨 Thumbnails</h3>
        <h2>8</h2>
      </div>

      <div className="dashboard-card">
        <h3>📅 Planned Posts</h3>
        <h2>15</h2>
      </div>

      <div className="dashboard-card">
        <h3>🚀 AI Requests</h3>
        <h2>132</h2>
      </div>
    </div>
  );
}

export default StatsCards;