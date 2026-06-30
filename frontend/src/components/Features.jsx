function Features() {
  const features = [
    {
      title: "AI Script Writer",
      description: "Generate high-quality video scripts in seconds."
    },
    {
      title: "Thumbnail Generator",
      description: "Create eye-catching thumbnails with AI."
    },
    {
      title: "Content Planner",
      description: "Organize your ideas and publishing schedule."
    }
  ];

  return (
    <section className="features container">
      <h2>Powerful Features</h2>

      <div className="cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;