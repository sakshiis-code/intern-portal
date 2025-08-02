import React, { useState } from 'react';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login check — you can replace this with real API later
    if (email === 'admin@example.com' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={styles.body}>
      {!loggedIn ? (
        <div style={styles.card}>
          <h2 style={styles.title}>Intern Portal 🚀</h2>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      )}
    </div>
  );
}

const styles = {
  body: {
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    height: '100vh',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '40px 30px',
    width: '320px',
    color: '#fff',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    textAlign: 'center'
  },
  title: {
    marginBottom: '25px',
    fontWeight: 600,
    fontSize: '24px'
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    width: '100%',
    fontSize: '14px'
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#764ba2',
    fontWeight: 'bold',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    width: '100%',
    marginTop: '10px',
    cursor: 'pointer',
    transition: '0.3s'
  }
};

export default App;
