const express = require('express');
const app = express();

app.get('/convert', (req, res) => {
  const { speed, from, to } = req.query;
  if (!speed || !from || !to) return res.status(400).json({ error: 'Missing parameters' });
  
  const s = parseFloat(speed);
  if (isNaN(s)) return res.status(400).json({ error: 'Speed must be number' });
  
  let result;
  const conversions = { 'ms': 1, 'kmh': 3.6, 'mph': 2.237 };
  
  if (!conversions[from] || !conversions[to]) return res.status(400).json({ error: 'Invalid units: use ms, kmh, or mph' });
  
  result = (s / conversions[from]) * conversions[to];
  res.json({ speed: s, from, to, result: Math.round(result * 100) / 100 });
});

app.listen(3024, () => console.log('Speed Converter API on port 3024'));
