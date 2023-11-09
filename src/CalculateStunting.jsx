import React, { useState } from 'react';

const dataLK = [
  { umur: 0, sd_3: 44.2, sd_2: 46.1, med: 49.9, sd2: 53.7, sd3: 55.6 },
  { umur: 1, sd_3: 48.9, sd_2: 50.8, med: 54.7, sd2: 58.6, sd3: 60.6 },
  { umur: 2, sd_3: 52.4, sd_2: 54.4, med: 58.4, sd2: 62.4, sd3: 64.4 },
  { umur: 3, sd_3: 55.3, sd_2: 57.3, med: 61.4, sd2: 65.5, sd3: 67.6 },
  { umur: 4, sd_3: 57.6, sd_2: 59.7, med: 63.9, sd2: 68.0, sd3: 70.1 },
  { umur: 5, sd_3: 59.6, sd_2: 61.7, med: 65.9, sd2: 70.1, sd3: 72.2 },
  { umur: 6, sd_3: 61.2, sd_2: 63.3, med: 67.6, sd2: 71.9, sd3: 74.0 },
  { umur: 7, sd_3: 62.7, sd_2: 64.8, med: 69.2, sd2: 73.5, sd3: 75.7 },
  { umur: 8, sd_3: 64.0, sd_2: 66.2, med: 70.6, sd2: 75.0, sd3: 77.2 },
  { umur: 9, sd_3: 65.2, sd_2: 67.5, med: 72.0, sd2: 76.5, sd3: 78.7 },
  { umur: 10, sd_3: 66.4, sd_2: 68.7, med: 73.3, sd2: 77.9, sd3: 80.1 }
];

function CalculateStunting() {
  const [umur, setUmur] = useState('');
  const [tinggiBadan, setTinggiBadan] = useState('');
  const [statusStunting, setStatusStunting] = useState('');

  const handleUmurChange = (event) => {
    setUmur(event.target.value);
  };

  const handleTinggiBadanChange = (event) => {
    setTinggiBadan(event.target.value);
  };

  const calculateStatusStunting = () => {
    const umurInt = parseInt(umur);
    const tinggiFloat = parseFloat(tinggiBadan);

    const dataLKUmur = dataLK.find((data) => data.umur === umurInt);

    if (dataLKUmur) {
      if (tinggiFloat < dataLKUmur.med) {
        setStatusStunting('pendek');
      } else {
        setStatusStunting('tinggi');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    calculateStatusStunting();

    // Di sini, Anda dapat mengirim data umur, tinggiBadan, dan statusStunting ke database atau tempat penyimpanan data lainnya
    console.log('Umur:', umur);
    console.log('Tinggi Badan:', tinggiBadan);
    console.log('Status Stunting:', statusStunting);
  };

  return (
    <div>
      <h2>Hitung Status Stunting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Umur (bulan):</label>
          <input type="number" value={umur} onChange={handleUmurChange} required />
        </div>
        <div>
          <label>Tinggi Badan (cm):</label>
          <input type="number" value={tinggiBadan} onChange={handleTinggiBadanChange} required />
        </div>
        <div>
          <button type="submit">Hitung</button>
        </div>
      </form>
      <div>
        {statusStunting && <p>Status Stunting: {statusStunting}</p>}
      </div>
    </div>
  );
}

export default CalculateStunting;
