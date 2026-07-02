function Settings() {
  return (
    <>
      <h1>Settings ⚙️</h1>

      <p>
        Manage your CreatorOS preferences.
      </p>

      <div className="settings-page">

        <div className="settings-card">

          <h3>Profile</h3>

          <input
            type="text"
            placeholder="Your Name"
          />

        </div>

        <div className="settings-card">

          <h3>Email</h3>

          <input
            type="email"
            placeholder="example@email.com"
          />

        </div>

        <div className="settings-card">

          <h3>Theme</h3>

          <select>
            <option>Dark</option>
            <option>Light</option>
          </select>

        </div>

        <button className="generate-btn">
          Save Changes
        </button>

      </div>
    </>
  );
}

export default Settings;