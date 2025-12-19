const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.askAI = async (req, res) => {
  try {
    const { problem } = req.body;

    if (!problem) {
      return res.status(400).json({ error: "Problemă lipsă" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(problem);
    const response = result.response.text();

    res.json({ answer: response });
  } catch (err) {
    console.error("AI error:", err);
    res.status(500).json({ error: "Eroare AI" });
  }
};
