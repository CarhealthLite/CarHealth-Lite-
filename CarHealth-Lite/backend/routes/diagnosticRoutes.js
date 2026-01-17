const express = require('express');
const router = express.Router();
const OpenAI = require("openai");
const { protect } = require('../middleware/authMiddleware');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/diagnostic', protect, async (req, res) => {
  try {
    const {
      marca, model, an, motorizare, codMotor,
      kilometraj, service, simptome
    } = req.body;

    const prompt = `
EȘTI UN SISTEM DE DIAGNOSTIC AUTO.
NU EȘTI CHATBOT.
NU PUI ÎNTREBĂRI.
NU CONTINUI CONVERSAȚIA.
OFERI UN SINGUR RĂSPUNS FINAL.

NU folosi expresii de tip:
- „Dacă vrei…”
- „Pot să te ajut…”
- „Spune-mi…”
- „La următorul mesaj…”

Generează un diagnostic unic, care nu are nicio legătură cu orice mesaj trecut pentru următorul vehicul:
Marcă: ${marca}
Model: ${model}
An fabricație: ${an}
Motorizare: ${motorizare}
Cod motor: ${codMotor || "Nu este specificat"}
Ultimele service-uri: ${service}
Simptome: ${simptome}
Kilometraj: ${kilometraj}

Răspunsul trebuie să fie:
- Clar, concis și corect din punct de vedere al limbii române
- Aerisit, ușor de citit
- Să fie lung cu multe detalii în mai multe propoziții în care explici fiecare problemă și ce soluție poate avea sau daca este prea complicat să indici transportarea la un mecanic
- Include emoji-uri relevante
- Folosește bold acolo unde este important, de exemplu la categorii sau la sfaturi
- Nu oferi sugestii pentru viitor și nu continua conversația

Include și un procent de probabilitate a defectului, pe care îl voi folosi pentru cercul vizual.`;

    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: prompt,
    });

    res.json({ result: response.output_text });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Eroare diagnostic AI' });
  }
});


module.exports = router;

