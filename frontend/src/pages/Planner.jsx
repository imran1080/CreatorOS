function Planner() {
  return (
    <>
      <h1>Content Planner 📅</h1>

      <p>
        Organize your content schedule and stay consistent.
      </p>

      <div className="planner-page">

        <button className="generate-btn">
          Add New Plan
        </button>

        <div className="planner-list">

          <div className="planner-card">
            <h3>Monday</h3>
            <p>YouTube Short - AI Tips</p>
          </div>

          <div className="planner-card">
            <h3>Wednesday</h3>
            <p>Long Video - ChatGPT Tutorial</p>
          </div>

          <div className="planner-card">
            <h3>Friday</h3>
            <p>Instagram Reel - Motivation</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Planner;