import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.paragraph}>Halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

// Gaya langsung di dalam file JSX
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#888',
  },
};

export default NotFound;
