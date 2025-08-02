import React from 'react';

function Login({ onLogin }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Intern 👋</h1>
      <p style={styles.subtitle}>Login to continue to your dashboard</p>
      <button onClick={onLogin} style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '120px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#666'
  },
  button: {
    padding: '10px 30px',
    fontSize: '16px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Login;
