import "./QuickActions.css";

function QuickActions() {
  return (
    <section className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="quick-actions-grid">
        <button className="action-btn">
          📝 New Script
        </button>

        <button className="action-btn">
          🎨 Generate Thumbnail
        </button>

        <button className="action-btn">
          📅 Plan Content
        </button>

        <button className="action-btn">
          ⚙️ Settings
        </button>
      </div>
    </section>
  );
}

export default QuickActions;