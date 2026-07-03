import "./RecentActivity.css";

function RecentActivity() {
  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>

      <div className="activity-item">
        <span>📝</span>

        <div>
          <h4>New Script Created</h4>
          <p>5 minutes ago</p>
        </div>
      </div>

      <div className="activity-item">
        <span>🎨</span>

        <div>
          <h4>Thumbnail Generated</h4>
          <p>20 minutes ago</p>
        </div>
      </div>

      <div className="activity-item">
        <span>📅</span>

        <div>
          <h4>Content Planned</h4>
          <p>Yesterday</p>
        </div>
      </div>
    </section>
  );
}

export default RecentActivity;