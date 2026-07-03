import "./WelcomeBanner.css";

function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div>
        <span className="banner-badge">
          ✨ CreatorOS Pro
        </span>

        <h2>Create Better Content with AI</h2>

        <p>
          Generate scripts, thumbnails and plan your content from one place.
        </p>
      </div>

      <button className="banner-btn">
        Start Creating
      </button>
    </section>
  );
}

export default WelcomeBanner;