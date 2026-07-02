function Features() {
  const features = [
    {
      icon: "📝",
      title: "AI Script Writer",
      description: "Generate professional scripts for YouTube, TikTok and Reels."
    },
    {
      icon: "🎨",
      title: "Thumbnail Creator",
      description: "Design attractive thumbnails in just a few clicks."
    },
    {
      icon: "📅",
      title: "Content Planner",
      description: "Organize your ideas and schedule your content easily."
    }
  ];

  return (
    <section className="features">
      <div className="container">

        <h2>Everything You Need</h2>

        <p className="features-subtitle">
          Powerful AI tools to help creators save time and produce better content.
        </p>

        <div className="cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;