import React from 'react';
import error from "../aset/error.png"
import { Link } from 'react-router-dom';

const NonRoute = () => {
  return (
    <div style={{ boxSizing: 'border-box', backgroundColor: '#0a0b3b', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={error} width={400} />
        <h1 style={{ fontSize: '6em', margin: '0', animation: 'pulse 2s ease-in-out infinite' }}>404</h1>
        <p style={{ fontSize: '1.5em', margin: '0', marginTop: '20px' }}>Maaf, Halaman tidak tersedia</p>
        <Link
          to={"/"}
          className='btn'
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#4293ef',
            color: '#fff',
            textDecoration: 'none',
            marginTop: '20px',
            fontSize: '1.2em',
            borderRadius: '50px',
            animation: 'bounce 1s ease-in-out infinite',
          }
        }
        >
          Kembali ke beranda
        </Link>
      </div>
    </div>
  );
};

export default NonRoute;
