import React from 'react';
import DoughnutChart from './Doughnut';

const StatGrafik = () => {
  return (
    <div className="d-flex flex-row flex-wrap container">
      {/* Stat gizi BB/U */}
      <DoughnutChart />
      {/* Stat by umur */}
      {/* Pake progress bootstrap */}
      <div className="p-2 flex-fill">Bar Percent</div>
      {/* Stat by gambar */}
      <div className="p-2 flex-fill">Stat gambar balita</div>
    </div>
  );
}

export default StatGrafik;
