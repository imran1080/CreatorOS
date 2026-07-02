import { useState } from "react";
import "./AIWriter.css";

function AIWriter() {
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState("");

const [formData, setFormData] = useState({
  topic: "",
  language: "English",
  length: "Short (1-3 min)",
  tone: "Professional",
  description: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleGenerate = () => {
  setLoading(true);

  setTimeout(() => {
    const generated = `
🎬 Title: ${formData.topic}

🌍 Language: ${formData.language}

🎭 Tone: ${formData.tone}

⏱️ Length: ${formData.length}

📝 Description:

${formData.description}
`;

    setScript(generated);

    setLoading(false);
  }, 2000);
};

const handleReset = () => {
  setFormData({
    topic: "",
    language: "English",
    length: "Short (1-3 min)",
    tone: "Professional",
    description: "",
  });

  setScript("");
};
  return (
    <div className="ai-writer">

      <h1>AI Script Writer ✍️</h1>

      <p>
        Generate professional YouTube scripts in seconds.
      </p>

      <div className="form-group">
        <label>Video Topic</label>

        <input
  type="text"
  name="topic"
  value={formData.topic}
  onChange={handleChange}
  placeholder="Example: How AI Will Change Education"
/>
      </div>

      <div className="form-group">
        <label>Language</label>

        <select
  name="language"
  value={formData.language}
  onChange={handleChange}
>
  <option>English</option>
  <option>العربية</option>
  <option>Français</option>
</select>

      </div>

      <div className="form-group">
        <label>Video Length</label>

        <select
  name="length"
  value={formData.length}
  onChange={handleChange}
>
  <option>Short (1-3 min)</option>
  <option>Medium (5-8 min)</option>
  <option>Long (10-15 min)</option>
</select>
      </div>

      <div className="form-group">
  <label>Tone</label>

  <select
  name="tone"
  value={formData.tone}
  onChange={handleChange}
>
  <option>Professional</option>
  <option>Casual</option>
  <option>Funny</option>
  <option>Educational</option>
  <option>Storytelling</option>
</select>
</div>

      <div className="form-group">
        <label>Description</label>

        <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  placeholder="Describe your video idea..."
></textarea>
      </div>

      <div className="button-group">
  <button
    className="generate-btn"
    onClick={handleGenerate}
    disabled={loading}
  >
    {loading ? "Generating..." : "Generate Script"}
  </button>

  <button
    className="reset-btn"
    onClick={handleReset}
    disabled={loading}
  >
    Reset
  </button>
</div>
      <div className="script-output">
  <h2>Generated Script</h2>

  <div className="script-box">
  {script || "Your generated script will appear here..."}
</div>
</div>

    </div>
  );
}

export default AIWriter;