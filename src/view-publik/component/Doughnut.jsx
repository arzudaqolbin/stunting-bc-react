import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import ClipLoader
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
import BASE_URL, { apiAuth } from '../../base/apiConfig';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const DoughnutChart = () => {
  let reff = useRef(null);
  const [dataReal, setDataReal] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/balitas/stat/doughnut`, apiAuth());
        setDataReal(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when API call is completed
      }
    };

    fetchData();
  }, []);

  const dataChart = {
    labels: ["Pendek", "Normal"],
    datasets: [
      {
        label: "Total Balita",
        data: [dataReal.totalStunting, dataReal.total_balita - dataReal.totalStunting],
        backgroundColor: ['black', 'yellow'],
        maintainAspectRatio: true,
      },
    ],
  };

  const optionsChart = {};

  const downloadChart = useCallback(() => {
    const link = document.createElement("a");
    link.download = "doughnut_status_tb_u.png";
    link.href = reff.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className='p-3'>
      {loading ? (
       <div className='text-center'>
       <ClipLoader
         loading={loading}
         size={150}
       />
     </div>
      ) : (
        <>
          <h4>Prevalensi Stunting</h4>
          <button className="float-right" type="button" onClick={downloadChart}>
          <i class="fa-solid fa-download"></i>
          </button>
          <Doughnut ref={reff} data={dataChart} options={optionsChart}></Doughnut>
        </>
      )}
    </div>
  );
};

export default DoughnutChart;
