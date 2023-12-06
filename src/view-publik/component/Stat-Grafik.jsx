import React from 'react';
import DoughnutChart from './Doughnut';
import StackedBarGender from './StackedBar';
import BayiStat from './bayi-stat';

const StatGrafik = () => {
  return (
    <div className="d-flex flex-wrap container align-items-center">
      {/* Stat gizi BB/U */}
      <div className='col-lg-4 md-6 sm-12'>
      <DoughnutChart />
      </div>
      {/* Stat by umur */}
      {/* Pake progress bootstrap */}
      <div className='col-lg-4 md-6 sm-12'>
      <StackedBarGender />
      </div>
      {/* Stat by gambar */}
      <div className='col-lg-4 md-12 sm-12'>
      <BayiStat />
      </div>
    </div>
//     <div className="container">
//   <div className="row">
//     {/* Stat gizi BB/U dan Stat by umur */}
//     <div className="col-lg-8">
//       <div className="d-flex flex-wrap">
//         <div className="col-md-6 mb-3">
//           <DoughnutChart />
//         </div>
//         <div className="col-md-6 mb-3">
//           <StackedBarGender />
//         </div>
//       </div>
//     </div>

//     {/* Stat by gambar */}
//     <div className="col-lg-4">
//       <div className="mb-3">
//         <BayiStat />
//       </div>
//     </div>
//   </div>
// </div>

  );
}

export default StatGrafik;
