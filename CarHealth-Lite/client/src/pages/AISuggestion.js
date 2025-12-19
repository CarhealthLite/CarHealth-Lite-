import React, { useState } from 'react';

const AISuggestion = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleAsk = () => {
    setSuggestion(`AI Suggestion for: "${input}"`);
  };

  return (
    <div className="ai-container">
      <h2>AI Suggestion</h2>
      <input
        type="text"
        placeholder="Enter a question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAsk}>Ask AI</button>
      {suggestion && <p className="ai-suggestion">{suggestion}</p>}
    </div>
  );
};

export default AISuggestion;
