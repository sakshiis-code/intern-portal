import React, { useEffect, useState } from 'react';

function Dashboard({ onLogout }) {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [animatedDonation, setAnimatedDonation] = useState(0);

  // Fetch user data
  useEffect(() => {
    fetch("https://intern-portal-32ao.onrender.com/api/intern")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching intern data:', err));
  }, []);

  // Animate donation counter
  useEffect(() => {
    if (data) {
      let start = 0;
      const end = data.totalDonations || 0;
      const duration = 1000; // in ms
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setAnimatedDonation(Math.floor(start));
      }, 20);
    }
  }, [data]);

  if (!data) {
    const loadingStyles = darkMode ? darkStyles.loading : lightStyles.loading;
    return <p style={loadingStyles}>Loading...</p>;
  }

  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <div style={{ ...themeStyles.container, transition: '0.3s' }}>
      <nav style={themeStyles.navbar}>
        <div style={themeStyles.navContent}>
          <h2 style={themeStyles.navTitle}>Intern Dashboard</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => setDarkMode(!darkMode)} style={themeStyles.toggleBtn}>
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button onClick={onLogout} style={themeStyles.logoutBtn}>Logout</button>
          </div>
        </div>
      </nav>

      <div style={themeStyles.section}>
        <div style={themeStyles.card}>
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=intern"
            alt="Avatar"
            style={{ width: '70px', borderRadius: '50%', marginBottom: '15px' }}
          />
          <h3>Hello, {data.name || 'Intern'} 👋</h3>
          <p><strong>Referral Code:</strong> {data.referralCode || '-'}</p>
          <p><strong>Total Donations:</strong> ₹{animatedDonation}</p>
        </div>

        <div style={themeStyles.card}>
          <h3>🎁 Rewards & Unlockables</h3>
          <ul>
            <li>🎉 ₹5,000 raised – Certificate</li>
            <li>🏆 ₹10,000 raised – T-shirt</li>
            <li>🚀 ₹20,000 raised – Internship Letter</li>
          </ul>
        </div>

        <div style={themeStyles.card}>
          <h3>🏆 Leaderboard</h3>
          <ol>
            {(data.leaderboard || []).map((item, index) => (
              <li key={index}>
                {item.name} – ₹{item.amount}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// -- Styles unchanged, no issue there --
const baseStyles = {
  card: {
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: '0.3s',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  toggleBtn: {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px'
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px'
  }
};

const lightStyles = {
  ...baseStyles,
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '20px 30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  navTitle: {
    margin: 0,
    fontSize: '22px'
  },
  card: {
    ...baseStyles.card,
    backgroundColor: 'white',
    color: '#333'
  }
};

const darkStyles = {
  ...baseStyles,
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#1e1e2f',
    color: '#f0f0f0',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#0d0d15',
    color: 'white',
    padding: '20px 30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
  },
  navTitle: {
    margin: 0,
    fontSize: '22px'
  },
  card: {
    ...baseStyles.card,
    backgroundColor: '#2c2c3c',
    color: '#f0f0f0'
  }
};

export default Dashboard;
