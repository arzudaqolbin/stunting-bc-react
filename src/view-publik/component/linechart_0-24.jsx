import React, { useEffect, useState, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
import { CartesianGrid, LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';

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
    { umur: 10, sd_3: 66.4, sd_2: 68.7, med: 73.3, sd2: 77.9, sd3: 80.1 },
    { umur: 11, sd_3: 67.6, sd_2: 69.9, med: 74.5, sd2: 79.2, sd3: 81.5 },
    { umur: 12, sd_3: 68.6, sd_2: 71.0, med: 75.7, sd2: 80.5, sd3: 82.9 },
    { umur: 13, sd_3: 69.6, sd_2: 72.1, med: 76.9, sd2: 81.8, sd3: 84.2 },
    { umur: 14, sd_3: 70.6, sd_2: 73.1, med: 78.0, sd2: 83.0, sd3: 85.5 },
    { umur: 15, sd_3: 71.6, sd_2: 74.1, med: 79.1, sd2: 84.2, sd3: 86.7 },
    { umur: 16, sd_3: 72.5, sd_2: 75.0, med: 80.2, sd2: 85.4, sd3: 88.0 },
    { umur: 17, sd_3: 73.3, sd_2: 76.0, med: 81.2, sd2: 86.5, sd3: 89.2 },
    { umur: 18, sd_3: 74.2, sd_2: 76.9, med: 82.3, sd2: 87.7, sd3: 90.4 },
    { umur: 19, sd_3: 75.0, sd_2: 77.7, med: 83.2, sd2: 88.8, sd3: 91.5 },
    { umur: 20, sd_3: 75.8, sd_2: 78.6, med: 84.2, sd2: 89.8, sd3: 92.6 },
    { umur: 21, sd_3: 76.5, sd_2: 79.4, med: 85.1, sd2: 90.9, sd3: 93.8 },
    { umur: 22, sd_3: 77.2, sd_2: 80.2, med: 86.0, sd2: 91.9, sd3: 94.9 },
    { umur: 23, sd_3: 78.0, sd_2: 81.0, med: 86.9, sd2: 92.9, sd3: 95.9 },
    { umur: 24, sd_3: 78.7, sd_2: 81.7, med: 87.8, sd2: 93.9, sd3: 97.0 },
    
  ];

  const dataPR = [
    { umur: 0, sd_3: 43.6, sd_2: 45.4, med: 49.1, sd2: 52.9, sd3: 54.7 },
    { umur: 1, sd_3: 47.8, sd_2: 49.8, med: 53.7, sd2: 57.6, sd3: 59.5 },
    { umur: 2, sd_3: 51.0, sd_2: 53.0, med: 57.1, sd2: 61.1, sd3: 63.2 },
    { umur: 3, sd_3: 53.5, sd_2: 55.6, med: 59.8, sd2: 64.0, sd3: 66.1 },
    { umur: 4, sd_3: 55.6, sd_2: 57.8, med: 62.1, sd2: 66.4, sd3: 68.6 },
    { umur: 5, sd_3: 57.4, sd_2: 59.6, med: 64.0, sd2: 68.5, sd3: 70.7 },
    { umur: 6, sd_3: 58.9, sd_2: 61.2, med: 65.7, sd2: 70.3, sd3: 72.5 },
    { umur: 7, sd_3: 60.3, sd_2: 62.7, med: 67.3, sd2: 71.9, sd3: 74.2 },
    { umur: 8, sd_3: 61.7, sd_2: 64.0, med: 68.7, sd2: 73.5, sd3: 75.8 },
    { umur: 9, sd_3: 62.9, sd_2: 65.3, med: 70.1, sd2: 75.0, sd3: 77.4 },
    { umur: 10, sd_3: 64.1, sd_2: 66.5, med: 71.5, sd2: 76.4, sd3: 78.9 },
    { umur: 11, sd_3: 65.2, sd_2: 67.7, med: 72.8, sd2: 77.8, sd3: 80.3 },
    { umur: 12, sd_3: 66.3, sd_2: 68.9, med: 74.0, sd2: 79.2, sd3: 81.7 },
    { umur: 13, sd_3: 67.3, sd_2: 70.0, med: 75.2, sd2: 80.5, sd3: 83.1 },
    { umur: 14, sd_3: 68.3, sd_2: 71.0, med: 76.4, sd2: 81.7, sd3: 84.4 },
    { umur: 15, sd_3: 69.3, sd_2: 72.0, med: 77.5, sd2: 83.0, sd3: 85.7 },
    { umur: 16, sd_3: 70.2, sd_2: 73.0, med: 78.6, sd2: 84.2, sd3: 87.0 },
    { umur: 17, sd_3: 71.1, sd_2: 74.0, med: 79.7, sd2: 85.4, sd3: 88.2 },
    { umur: 18, sd_3: 72.0, sd_2: 74.9, med: 80.7, sd2: 86.5, sd3: 89.4 },
    { umur: 19, sd_3: 72.8, sd_2: 75.8, med: 81.7, sd2: 87.6, sd3: 90.6 },
    { umur: 20, sd_3: 73.7, sd_2: 76.7, med: 82.7, sd2: 88.7, sd3: 91.7 },
    { umur: 21, sd_3: 74.5, sd_2: 77.5, med: 83.7, sd2: 89.8, sd3: 92.9 },
    { umur: 22, sd_3: 75.2, sd_2: 78.4, med: 84.6, sd2: 90.8, sd3: 94.0 },
    { umur: 23, sd_3: 76.0, sd_2: 79.2, med: 85.5, sd2: 91.9, sd3: 95.0 },
    { umur: 24, sd_3: 76.7, sd_2: 80.0, med: 86.4, sd2: 92.9, sd3: 96.1 },
    
    
  ];
  
  


const LineChart_Umur_0_24 = ({apiAuth, idBalita}) => {
    const [dataPatokan, setDataPatokan] = useState([]);
    const [dataTarget, setDataTarget] = useState([]);
    const [dataCombine, setDataCombine] = useState([]);
    const chartRef = useRef();
  
    useEffect(() => {
      const fetchDataBalita = async () => {
        try {
          const result = await axios.get(`${BASE_URL}/balitas/${idBalita}`, apiAuth);
  
          const jk = result.data.jenis_kelamin;
          const patokanData = jk === 'Laki-laki' ? dataLK : dataPR;
          setDataPatokan(patokanData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      const fetchDataTarget = async () => {
        try {
          const result = await axios.get(`${BASE_URL}/pengukurans/umur-cat-1/${idBalita}`, apiAuth);
          setDataTarget(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataBalita();
      fetchDataTarget();
    }, [idBalita, apiAuth]);
  
    useEffect(() => {
      const dataGabungan = dataPatokan.map((patokanItem) => {
        const targetItem = dataTarget.find((target) => target.umur === patokanItem.umur);
        return { ...patokanItem, PB: targetItem ? targetItem.tinggi_badan : null };
      });
  
      setDataCombine(dataGabungan);
    }, [dataPatokan, dataTarget]);


    // const handleDownload = () => {
    //     const svgString = new XMLSerializer().serializeToString(chartRef.current);
    //     const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    //     const blobURL = URL.createObjectURL(blob);
    
    //     const downloadLink = document.createElement('a');
    //     downloadLink.href = blobURL;
    //     downloadLink.download = 'chart.svg';
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    //   };

    return(
      <ResponsiveContainer width="100%" height={500}>
        <h3 className='text-center m-3'>Pengukuran PBU Umur 0-24 bulan</h3>
        <LineChart ref={chartRef} width={1000} height={500} data={dataCombine}>
            <Line type="monotone" dataKey="PB" stroke="blue" strokeWidth={2} dot={true} fill='blue' />
            <Line type="monotone" dataKey="sd_3" stroke="black" strokeWidth={1} dot={false} />
            <Line type="monotone" dataKey="sd_2" stroke="red" strokeWidth={1} dot={false}  />
            <Line type="monotone" dataKey="med" stroke="green" strokeWidth={1} dot={false}  />
            <Line type="monotone" dataKey="sd2" stroke="red" strokeWidth={1} dot={false}  />
            <Line type="monotone" dataKey="sd3" stroke="black" strokeWidth={1} dot={false}  />
            <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
            <XAxis dataKey="umur" label="Umur (bulan)" height={100} />
            <YAxis type="number" domain={['dataMin', 'dataMax']} label={{value: "Panjang Badan (cm)", angle: -90}} width={120} />

            <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default LineChart_Umur_0_24;