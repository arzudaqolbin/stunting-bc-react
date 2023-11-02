import React from 'react';
import DoughnutChart from './Doughnut';
import StackedBarGender from './StackedBar';
import BayiStat from './bayi-stat';

const StatGrafik = () => {
  return (
    <div className="d-flex flex-row flex-wrap container">
      {/* Stat gizi BB/U */}
      <DoughnutChart />
      {/* Stat by umur */}
      {/* Pake progress bootstrap */}
      <StackedBarGender />
      {/* Stat by gambar */}
      <BayiStat />
    </div>
  );
}

export default StatGrafik;
