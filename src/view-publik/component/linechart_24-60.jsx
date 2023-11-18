import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
// import { Line } from 'react-chartjs-2';
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import { saveAs } from "file-saver";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { useCurrentPng } from "recharts-to-png";
import FileSaver from "file-saver";

const dataLK = [
  { umur: 24, sd_3: 78.0, sd_2: 81.0, med: 87.1, sd2: 93.2, sd3: 96.3 },
  { umur: 25, sd_3: 78.6, sd_2: 81.7, med: 88.0, sd2: 94.2, sd3: 97.3 },
  { umur: 26, sd_3: 79.3, sd_2: 82.5, med: 88.8, sd2: 95.2, sd3: 98.3 },
  { umur: 27, sd_3: 79.9, sd_2: 83.1, med: 89.6, sd2: 96.1, sd3: 99.3 },
  { umur: 28, sd_3: 80.5, sd_2: 83.8, med: 90.4, sd2: 97.0, sd3: 100.3 },
  { umur: 29, sd_3: 81.1, sd_2: 84.5, med: 91.2, sd2: 97.9, sd3: 101.2 },
  { umur: 30, sd_3: 81.7, sd_2: 85.1, med: 91.9, sd2: 98.7, sd3: 102.1 },
  { umur: 31, sd_3: 82.3, sd_2: 85.7, med: 92.7, sd2: 99.6, sd3: 103.0 },
  { umur: 32, sd_3: 82.8, sd_2: 86.4, med: 93.4, sd2: 100.4, sd3: 103.9 },
  { umur: 33, sd_3: 83.4, sd_2: 86.9, med: 94.1, sd2: 101.2, sd3: 104.8 },
  { umur: 34, sd_3: 83.9, sd_2: 87.5, med: 94.8, sd2: 102.0, sd3: 105.6 },
  { umur: 35, sd_3: 84.4, sd_2: 88.1, med: 95.4, sd2: 102.7, sd3: 106.4 },
  { umur: 36, sd_3: 85.0, sd_2: 88.7, med: 96.1, sd2: 103.5, sd3: 107.2 },
  { umur: 37, sd_3: 85.5, sd_2: 89.2, med: 96.7, sd2: 104.2, sd3: 108.0 },
  { umur: 38, sd_3: 86.0, sd_2: 89.8, med: 97.4, sd2: 105.0, sd3: 108.8 },
  { umur: 39, sd_3: 86.5, sd_2: 90.3, med: 98.0, sd2: 105.7, sd3: 109.5 },
  { umur: 40, sd_3: 87.0, sd_2: 90.9, med: 98.6, sd2: 106.4, sd3: 110.3 },
  { umur: 41, sd_3: 87.5, sd_2: 91.4, med: 99.2, sd2: 107.1, sd3: 111.0 },
  { umur: 42, sd_3: 88.0, sd_2: 91.9, med: 99.9, sd2: 107.8, sd3: 111.7 },
  { umur: 43, sd_3: 88.4, sd_2: 92.4, med: 100.4, sd2: 108.5, sd3: 112.5 },
  { umur: 44, sd_3: 88.9, sd_2: 93.0, med: 101.0, sd2: 109.1, sd3: 113.2 },
  { umur: 45, sd_3: 89.4, sd_2: 93.5, med: 101.6, sd2: 109.8, sd3: 113.9 },
  { umur: 46, sd_3: 89.8, sd_2: 94.0, med: 102.2, sd2: 110.4, sd3: 114.6 },
  { umur: 47, sd_3: 90.3, sd_2: 94.4, med: 102.8, sd2: 111.1, sd3: 115.2 },
  { umur: 48, sd_3: 90.7, sd_2: 94.9, med: 103.3, sd2: 111.7, sd3: 115.9 },
  { umur: 49, sd_3: 91.2, sd_2: 95.4, med: 103.9, sd2: 112.4, sd3: 116.6 },
  { umur: 50, sd_3: 91.6, sd_2: 95.9, med: 104.4, sd2: 113.0, sd3: 117.3 },
  { umur: 51, sd_3: 92.1, sd_2: 96.4, med: 105.0, sd2: 113.6, sd3: 117.9 },
  { umur: 52, sd_3: 92.5, sd_2: 96.9, med: 105.6, sd2: 114.2, sd3: 118.6 },
  { umur: 53, sd_3: 93.0, sd_2: 97.4, med: 106.1, sd2: 114.9, sd3: 119.2 },
  { umur: 54, sd_3: 93.4, sd_2: 97.8, med: 106.7, sd2: 115.5, sd3: 119.9 },
  { umur: 55, sd_3: 93.9, sd_2: 98.3, med: 107.2, sd2: 116.1, sd3: 120.6 },
  { umur: 56, sd_3: 94.3, sd_2: 98.8, med: 107.8, sd2: 116.7, sd3: 121.2 },
  { umur: 57, sd_3: 94.7, sd_2: 99.3, med: 108.3, sd2: 117.4, sd3: 121.9 },
  { umur: 58, sd_3: 95.2, sd_2: 99.7, med: 108.9, sd2: 118.0, sd3: 122.6 },
  { umur: 59, sd_3: 95.6, sd_2: 100.2, med: 109.4, sd2: 118.6, sd3: 123.2 },
  { umur: 60, sd_3: 96.1, sd_2: 100.7, med: 110.0, sd2: 119.2, sd3: 123.9 },
];

const dataPR = [
  { umur: 24, sd_3: 76.0, sd_2: 79.3, med: 85.7, sd2: 92.2, sd3: 95.4 },
  { umur: 25, sd_3: 76.8, sd_2: 80.0, med: 86.6, sd2: 93.1, sd3: 96.4 },
  { umur: 26, sd_3: 77.5, sd_2: 80.8, med: 87.4, sd2: 94.1, sd3: 97.4 },
  { umur: 27, sd_3: 78.1, sd_2: 81.5, med: 88.3, sd2: 95.0, sd3: 98.4 },
  { umur: 28, sd_3: 78.8, sd_2: 82.2, med: 89.1, sd2: 96.0, sd3: 99.4 },
  { umur: 29, sd_3: 79.5, sd_2: 82.9, med: 89.9, sd2: 96.9, sd3: 100.3 },
  { umur: 30, sd_3: 80.1, sd_2: 83.6, med: 90.7, sd2: 97.7, sd3: 101.3 },
  { umur: 31, sd_3: 80.7, sd_2: 84.3, med: 91.4, sd2: 98.6, sd3: 102.2 },
  { umur: 32, sd_3: 81.3, sd_2: 84.9, med: 92.2, sd2: 99.4, sd3: 103.1 },
  { umur: 33, sd_3: 81.9, sd_2: 85.6, med: 92.9, sd2: 100.3, sd3: 103.9 },
  { umur: 34, sd_3: 82.5, sd_2: 86.2, med: 93.6, sd2: 101.1, sd3: 104.8 },
  { umur: 35, sd_3: 83.1, sd_2: 86.8, med: 94.4, sd2: 101.9, sd3: 105.6 },
  { umur: 36, sd_3: 83.6, sd_2: 87.4, med: 95.1, sd2: 102.7, sd3: 106.5 },
  { umur: 37, sd_3: 84.2, sd_2: 88.0, med: 95.7, sd2: 103.4, sd3: 107.3 },
  { umur: 38, sd_3: 84.7, sd_2: 88.6, med: 96.4, sd2: 104.2, sd3: 108.1 },
  { umur: 39, sd_3: 85.3, sd_2: 89.2, med: 97.1, sd2: 105.0, sd3: 108.9 },
  { umur: 40, sd_3: 85.8, sd_2: 89.8, med: 97.7, sd2: 105.7, sd3: 109.7 },
  { umur: 41, sd_3: 86.3, sd_2: 90.4, med: 98.4, sd2: 106.4, sd3: 110.5 },
  { umur: 42, sd_3: 86.8, sd_2: 90.9, med: 99.0, sd2: 107.2, sd3: 111.2 },
  { umur: 43, sd_3: 87.4, sd_2: 91.5, med: 99.7, sd2: 107.9, sd3: 112.0 },
  { umur: 44, sd_3: 87.9, sd_2: 92.0, med: 100.3, sd2: 108.6, sd3: 112.7 },
  { umur: 45, sd_3: 88.4, sd_2: 92.5, med: 100.9, sd2: 109.3, sd3: 113.5 },
  { umur: 46, sd_3: 88.9, sd_2: 93.1, med: 101.5, sd2: 110.0, sd3: 114.2 },
  { umur: 47, sd_3: 89.3, sd_2: 93.6, med: 102.1, sd2: 110.7, sd3: 114.9 },
  { umur: 48, sd_3: 89.8, sd_2: 94.1, med: 102.7, sd2: 111.3, sd3: 115.7 },
  { umur: 49, sd_3: 90.3, sd_2: 94.6, med: 103.3, sd2: 112.0, sd3: 116.4 },
  { umur: 50, sd_3: 90.7, sd_2: 95.1, med: 103.9, sd2: 112.7, sd3: 117.1 },
  { umur: 51, sd_3: 91.2, sd_2: 95.6, med: 104.5, sd2: 113.3, sd3: 117.7 },
  { umur: 52, sd_3: 91.7, sd_2: 96.1, med: 105.0, sd2: 114.0, sd3: 118.4 },
  { umur: 53, sd_3: 92.1, sd_2: 96.6, med: 105.6, sd2: 114.6, sd3: 119.1 },
  { umur: 54, sd_3: 92.6, sd_2: 97.1, med: 106.2, sd2: 115.2, sd3: 119.8 },
  { umur: 55, sd_3: 93.0, sd_2: 97.6, med: 106.7, sd2: 115.9, sd3: 120.4 },
  { umur: 56, sd_3: 93.4, sd_2: 98.1, med: 107.3, sd2: 116.5, sd3: 121.1 },
  { umur: 57, sd_3: 93.9, sd_2: 98.5, med: 107.8, sd2: 117.1, sd3: 121.8 },
  { umur: 58, sd_3: 94.3, sd_2: 99.0, med: 108.4, sd2: 117.7, sd3: 122.4 },
  { umur: 59, sd_3: 94.7, sd_2: 99.5, med: 108.9, sd2: 118.3, sd3: 123.1 },
  { umur: 60, sd_3: 95.2, sd_2: 99.9, med: 109.4, sd2: 118.9, sd3: 123.7 },
];

const LineChart_Umur_24_60 = () => {
  const [dataPatokan, setDataPatokan] = useState([]);
  const [dataTarget, setDataTarget] = useState([]);
  const [dataCombine, setDataCombine] = useState([]);
  const { idBalita } = useParams();
  // const [getPng, { chartRef, isLoading }] = useCurrentPng();
  const [getPng, { chartRef, isLoading }] = useCurrentPng();
  console.log(chartRef); // Check if chartRef is defined here

  // const chartRef = useRef(null);
  let namaBalita = "";

  useEffect(() => {
    const fetchDataBalita = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/balitas/${idBalita}`);
        // setBalita(result.data);

        const jk = result.data.jenis_kelamin;
        namaBalita = result.data.nama;
        if (jk === "Laki-laki") {
          setDataPatokan(dataLK);
        } else {
          setDataPatokan(dataPR);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataTarget = async () => {
      try {
        const result = await axios.get(
          `${BASE_URL}/pengukurans/umur-cat-2/${idBalita}`
        );
        setDataTarget(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataBalita();
    fetchDataTarget();
  }, [idBalita]);

  useEffect(() => {
    const dataGabungan = dataPatokan.map((patokanItem) => {
      const targetItem = dataTarget.find(
        (target) => target.umur === patokanItem.umur
      );
      return {
        ...patokanItem,
        TB: targetItem ? targetItem.tinggi_badan : null,
      };
    });

    setDataCombine(dataGabungan);
  }, [dataPatokan, dataTarget]);

  // const downloadChart = useCallback(async() => {
  //     try {
  //         const chartNode = chartRef.current;
  //         const dataUrl = await htmlToImage.toPng(chartNode);
  //         saveAs(dataUrl, `${namaBalita}_statusTBU_0_24.png`);
  //     } catch (error) {
  //         console.error('Error downloading chart:', error);
  //     }
  // }, [namaBalita]);

  // Can also pass in options for html2canvas
  // const [getPng, { ref }] = useCurrentPng({ backgroundColor: '#000' });

  // const handleDownload = useCallback(async () => {
  //     const png = await getPng();

  //     // Verify that png is not undefined
  //     if (png) {
  //         // Download with FileSaver
  //         FileSaver.saveAs(png, `${namaBalita}_statusTB_24_60.png`);
  //     }
  // }, [getPng, namaBalita]);

  return (
    <>
      {/* <button onClick={handleDownload}>
        {isLoading ? "Downloading..." : "Download Chart"}
      </button> */}
      <LineChart ref={chartRef} width={800} height={500} data={dataCombine}>
        <Line
          type="monotone"
          dataKey="TB"
          stroke="blue"
          strokeWidth={3}
          fill="blue"
        />
        <Line
          type="monotone"
          dataKey="sd_3"
          stroke="black"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="sd_2"
          stroke="red"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="med"
          stroke="green"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="sd2"
          stroke="red"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="sd3"
          stroke="black"
          strokeWidth={1}
          dot={false}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="umur"
          label="Umur (bulan)"
          height={100}
          tickCount={10}
        />
        <YAxis
          type="number"
          domain={["dataMin", "dataMax"]}
          label={{ value: "Tinggi Badan (cm)", angle: -90 }}
          width={120}
        />

        <Tooltip />
      </LineChart>
    </>
  );
};

export default LineChart_Umur_24_60;
