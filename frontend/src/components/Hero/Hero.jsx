import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <span className="badge">
          🚀 AI Platform For Creators
        </span>

        <h1>
          Build Amazing Content
          <br />
          With Artificial Intelligence
        </h1>

        <p>
          Generate scripts, create thumbnails, organize ideas and
          manage your entire content workflow from one platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;