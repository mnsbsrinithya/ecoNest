const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-aqi', (req, res) => {
  const { aqi, pm25, pm10, pollutant } = req.body;
  console.log('Received:', { aqi, pm25, pm10, pollutant });

  res.json({ message: "✅ AQI data received by server!" });
});

app.get('/', (req, res) => {
  res.send("Backend is running 🟢");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
