import React, { useState } from 'react';

const AISuggestion = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleAsk = () => {
    setSuggestion(`AI suggestion for: "${input}"`);
  };

  return (
    <div>
      <h3>AI Suggestion</h3>

      <input
        type="text"
        placeholder="Enter a question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAsk}>Ask AI</button>

      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default AISuggestion;
