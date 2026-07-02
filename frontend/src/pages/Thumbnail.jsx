function Thumbnail() {
  return (
    <>
      <h1>Thumbnail Generator 🎨</h1>

      <p>
        Create eye-catching YouTube thumbnails with Artificial Intelligence.
      </p>

      <div className="thumbnail-page">

        <div className="form-group">
          <label>Thumbnail Idea</label>

          <input
            type="text"
            placeholder="Example: AI vs Humans"
          />
        </div>

        <div className="form-group">
          <label>Style</label>

          <select>
            <option>Modern</option>
            <option>Gaming</option>
            <option>Minimal</option>
            <option>Tech</option>
          </select>
        </div>

        <button className="generate-btn">
          Generate Thumbnail
        </button>

        <div className="thumbnail-preview">
          Thumbnail preview will appear here...
        </div>

      </div>
    </>
  );
}

export default Thumbnail;