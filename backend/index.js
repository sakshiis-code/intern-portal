const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy intern data API
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Sakshi Sharma",
    referralCode: "sakshiix30",
    totalDonations: 18450,
    leaderboard: [
      { name: "Riya", amount: 24500 },
      { name: "KD", amount: 21800 },
      { name: "Sakshi", amount: 18450 },
      { name: "Deepak", amount: 15300 },
      { name: "Neha", amount: 12000 }
    ]
  });
});

// Root test route
app.get('/', (req, res) => {
  res.send('Intern API is running 🚀');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
