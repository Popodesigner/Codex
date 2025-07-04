const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.json());

let appointments = [];

app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const appointment = req.body;
  appointment.id = appointments.length + 1;
  appointments.push(appointment);
  res.status(201).json(appointment);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
