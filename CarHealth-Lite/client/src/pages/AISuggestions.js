import React, { useState } from "react";
import api from "../api";

function AISuggestions() {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");

  const handleAnalyze = async () => {
    try {
      const res = await api.post("/ai/analyze", { problem });
      setSolution(res.data.suggestion);
    } catch (err) {
      console.error(err);
      setSolution("AI could not process the request.");
    }
  };

  return (
    <div>
      <h2>AI Suggestions</h2>
      <textarea
        placeholder="Describe your problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze</button>
      <p>{solution}</p>
    </div>
  );
}

export default AISuggestions;
