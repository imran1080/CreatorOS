import "./LatestProjects.css";

function LatestProjects() {
  const projects = [
    {
      title: "AI YouTube Script",
      status: "Completed",
    },
    {
      title: "Thumbnail for Tech Video",
      status: "In Progress",
    },
    {
      title: "Weekly Content Plan",
      status: "Pending",
    },
  ];

  return (
    <section className="latest-projects">
      <h2>Latest Projects</h2>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div>
            <h3>{project.title}</h3>
            <p>{project.status}</p>
          </div>

          <button className="view-btn">
            View
          </button>
        </div>
      ))}
    </section>
  );
}

export default LatestProjects;