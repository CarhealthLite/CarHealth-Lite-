const { TextServiceClient } = require('@google/generative-ai');
const client = new TextServiceClient({ apiKey: process.env.GEMINI_API_KEY });

exports.getAISuggestion = async (req, res) => {
  try {
    const { problemText } = req.body;
    const response = await client.generateText({
      model: 'gemini-2.5-flash',
      input: problemText
    });
    res.json({ suggestion: response.output[0].content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI request failed' });
  }
};
